class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.variacaoY = variacaoY;
        this.yInicial = height - altura - variacaoY;
        this.y = this.yInicial;
        this.gravidade = 5;
        this.pulo = 0;
    }

    pula() {
        //limita o pulo para 1
        if(this.quantidadesDePulos > 0) {
            this.pulo = - 40;
            this.quantidadesDePulos--;
            somPulo.play()
        }
    }

    anda(direçao) {
        this.x = this.x
        if(direçao == "frente") {
            if(this.x < width - this.largura)
                this.x += 10
        }
        if(direçao == "tras") {
            if(this.x > 0)
                this.x -= 10
        }
    }

    aplicaGravidade() {
        this.y += this.pulo;
        this.pulo += this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial
            this.quantidadesDePulos = 2;
        }
    }

    estaColidindo(inimigo, precisao) {
        const colisao = collideRectRect(
            this.x, 
            this.y, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * (precisao - 0.1)
            )

        return colisao;
    }
}