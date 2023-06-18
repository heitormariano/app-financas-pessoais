class LancamentoDao {
  constructor(objConnection) {
    this.objConnection = objConnection;
  }

  obterLancamentos(callback) {
    this.objConnection.executarConsulta('SELECT * FROM financas_pessoais.Lancamento', null, callback);
  }

  salvarLancamento(lancamento, callback) {
    let sql = 'INSERT INTO financas_pessoais.Lancamento (mes, categoria, tipo, valor) VALUES ?';
    let valores = [[lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]];

    this.objConnection.executarConsulta(sql, [valores], callback);
  }

  excluirLancamento(idLancamento, callback) {
    let sql = 'DELETE FROM financas_pessoais.Lancamento WHERE id_lancamento = ?';
    let idLancamentoExcluir = idLancamento;

    this.objConnection.executarConsulta(sql, [idLancamentoExcluir], callback);
  }
}

module.exports = LancamentoDao;
