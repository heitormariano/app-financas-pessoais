class FetchHttpClient {
  constructor() {}

  async get(url) {
    const response = await fetch(url);
    return response.json();
  }

  async post(url, dados) {
    await fetch(url, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(dados),
    });
  }

  async delete(url) {
    await fetch(url, {
      method: 'delete',
    });
  }
}
