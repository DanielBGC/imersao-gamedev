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

    estaColidindo(inimigo) {
        const precisao = 0.63
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