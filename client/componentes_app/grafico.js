class Grafico {
  constructor() {
    this.area = new Div(null, 'area-grafico');
    this.cores = ['#d91e1e', '#21ae28', '#e0f905', '#ab0f7c', '#4021c9'];
  }

  adicionarColuna(valorAltura, descricao) {
    const colunaGrafico = new Div(null, 'grafico-coluna');
    const corColuna = this.obterCorColuna(valorAltura);
    const descricaoColuna = this.obterDescricaoColuna(descricao);

    colunaGrafico.adicionarElementoFilho(corColuna.elemento);
    colunaGrafico.adicionarElementoFilho(descricaoColuna.elemento);
    this.area.adicionarElementoFilho(colunaGrafico.elemento);
  }

  obterCorColuna(valorAltura) {
    const corColuna = new Div(null, 'grafico-coluna-cor');
    corColuna.elemento.style.height = (valorAltura * 100) / 26000 + 'px';
    corColuna.elemento.style.background = this.cores.pop();
    return corColuna;
  }

  obterDescricaoColuna(descricao) {
    const descricaoColuna = new Div(null, 'grafico-coluna-texto');
    descricaoColuna.elemento.innerText = descricao;
    return descricaoColuna;
  }
}
