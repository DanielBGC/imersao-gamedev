class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, precisaoX, precisaoY, precisaoLargura, precisaoAltura) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, precisaoX, precisaoY, precisaoLargura, precisaoAltura)

        this.variacaoY = variacaoY;
        this.yInicial = height - altura - variacaoY;
        this.y = this.yInicial;
        this.gravidade = 5;
        this.pulo = 0;

        this.precisaoX = precisaoX;
        this.precisaoY = precisaoY;
        this.precisaoAltura = precisaoAltura;
        this.precisaoLargura = precisaoLargura;

        this.invencivel = false;
    }

    pula() {
        //limita o pulo para 2
        if(this.quantidadesDePulos > 0) {
            this.pulo = - 40;
            this.quantidadesDePulos--;
            somPulo.play()
        }

        this.precisaoY += 10;
    }

    anda(direçao) {
        this.x = this.x
        if(direçao == "frente") {
            if(this.x < width - this.largura) {
                this.x += 10
                this.precisaoX = 10;
            }
        }
        else if(direçao == "tras") {
            if(this.x > 0)
                this.x -= 5;
        }
        else {
            this.precisaoX = 20;
        }
    }

    aplicaGravidade() {
        this.y += this.pulo;
        this.pulo += this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial
            this.quantidadesDePulos = 2;
            
            this.precisaoY = 10;
        }
    }

    //torna o personagem invencivel por 1 segundo após colidir com algum inimigo
    ficaInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000)
    }

    estaColidindo(inimigo, precisaoX, precisaoY, precisaoLargura, precisaoAltura) {
        if(this.invencivel) {
            return false;
        }
        const colisao = collideRectRect(
            this.x + this.precisaoX, 
            this.y + this.precisaoY, 
            this.largura - this.precisaoLargura,
            this.altura - this.precisaoAltura,
            inimigo.x + precisaoX,
            inimigo.y + precisaoY,
            inimigo.largura - precisaoLargura,
            inimigo.altura - precisaoAltura
            )

        return colisao;
    }
}