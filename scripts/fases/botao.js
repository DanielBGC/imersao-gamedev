class Botao {
    constructor(texto, x, y) {
        this.texto = texto;
        this.x = x;
        this.y = y;

        this.botao = createButton(this.texto)
        this.botao.mousePressed( () => this._alteraCena() )

        //adiciona uma classe ao botão
        this.botao.addClass('botao-tela-inicial')
    }

    draw() {
        this.botao.position(this.x, this.y)
        this.botao.center('horizontal')
    }

    _alteraCena() {
        //remove o botão da tela ao mudar de tela
        this.botao.remove()
        cenaAtual = 'jogo';
    }
}