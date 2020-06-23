class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

        this.yInicial = height - altura - 15;
        this.y = this.yInicial;
        this.gravidade = 5;
        this.pulo = 0;
    }

    pula() {
        this.pulo = - 40;
    }

    aplicaGravidade() {
        this.y += this.pulo;
        this.pulo += this.gravidade;

        if(this.y > this.yInicial)   
            this.y = this.yInicial
    }
}