class LancamentoService {
  constructor(fetchHttpClient, baseUrl) {
    this.fetchHttpClient = fetchHttpClient;
    this.baseUrl = baseUrl;
  }

  async obterLancamentos() {
    return await this.fetchHttpClient.get(`${baseUrl}/api/lancamentos`);
  }

  async salvarLancamento(lancamento) {
    await this.fetchHttpClient.post(`${baseUrl}/api/lancamentos`, lancamento);
  }

  async excluirLancamento(idLancamento) {
    await this.fetchHttpClient.delete(`${baseUrl}/api/lancamentos/${idLancamento}`);
  }
}
