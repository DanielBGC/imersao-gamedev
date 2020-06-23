class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

        this.yInicial = height - altura - 15;
        this.y = this.yInicial;
        this.gravidade = 5;
        this.pulo = 0;
    }

    pula() {
        //limita o pulo para 1
        if(this.y == this.yInicial)
            this.pulo = - 40;
    }

    aplicaGravidade() {
        this.y += this.pulo;
        this.pulo += this.gravidade;

        if(this.y > this.yInicial)   
            this.y = this.yInicial
    }

    estaColidindo(inimigo) {
        const precisao = 0.7
        const colisao = collideRectRect(
            this.x, 
            this.y, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
            )

        return colisao;
    }
}