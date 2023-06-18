const LancamentoDto = require('./lancamentoDto');

class LancamentoController {
  constructor(httpServer, lancamentoDao) {
    // Se possível, melhorar a passagem dos callbacks das operações (get, post, delete)
    httpServer.register('get', '/api/lancamentos', (req, res) => {
      this.getLancamentosHandler(req, res, lancamentoDao);
    });

    httpServer.register('post', '/api/lancamentos', (req, res) => {
      this.saveLancamentosHandler(req, res, lancamentoDao);
    });

    // Postman - URL exemplo: http://localhost:3000/api/lancamentos/21
    httpServer.register('delete', '/api/lancamentos/:idLancamento', (req, res) => {
      this.deleteLancamentosHandler(req, res, lancamentoDao);
    });
  }

  getLancamentosHandler(req, res, lancamentoDao) {
    lancamentoDao.getLancamentos((erro, dados) => {
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

  saveLancamentosHandler(req, res, lancamentoDao) {
    const lancamento = req.body;
    lancamentoDao.saveLancamentos(lancamento, function (erro) {
      if (erro) throw erro;
      res.end();
    });
  }

  deleteLancamentosHandler(req, res, lancamentoDao) {
    const idLancamento = req.params.idLancamento;
    lancamentoDao.deleteLancamentos(idLancamento, function (erro) {
      if (erro) throw erro;
      res.end();
    });
  }
}

module.exports = LancamentoController;
