const LancamentoDto = require('./lancamentoDto');

class LancamentoController {
  constructor(httpServer, lancamentoDao) {
    // Se possível, melhorar a passagem dos callbacks das operações (get, post, delete)
    httpServer.register('get', '/api/lancamentos', (req, res) => {
      this.obterLancamentosHandler(req, res, lancamentoDao);
    });

    httpServer.register('post', '/api/lancamentos', (req, res) => {
      this.salvarLancamentoHandler(req, res, lancamentoDao);
    });

    // Postman - URL exemplo: http://localhost:3000/api/lancamentos/21
    httpServer.register('delete', '/api/lancamentos/:idLancamento', (req, res) => {
      this.excluirLancamentoHandler(req, res, lancamentoDao);
    });
  }

  obterLancamentosHandler(req, res, lancamentoDao) {
    lancamentoDao.obterLancamentos((erro, dados) => {
      if (erro) throw erro;
      const lancamentos = [];
      for (const lancamentoBanco of dados) {
        lancamentos.push(
          new LancamentoDto(
            lancamentoBanco.id_lancamento,
            lancamentoBanco.mes,
            lancamentoBanco.categoria,
            lancamentoBanco.tipo,
            parseFloat(lancamentoBanco.valor)
          )
        );
      }
      res.json(lancamentos);
    });
  }

  salvarLancamentoHandler(req, res, lancamentoDao) {
    const lancamento = req.body;
    lancamentoDao.salvarLancamento(lancamento, function (erro) {
      if (erro) throw erro;
      res.end();
    });
  }

  excluirLancamentoHandler(req, res, lancamentoDao) {
    const idLancamento = req.params.idLancamento;
    lancamentoDao.excluirLancamento(idLancamento, function (erro) {
      if (erro) throw erro;
      res.end();
    });
  }
}

module.exports = LancamentoController;
