//Importa tudo que tem na classe Animacao para a classe Inimigo
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
        super(matriz, imagem, x, variacaoY,  largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade;
        this.delay = delay;
        this.x = width + this.delay
    }

    //move o inimigo em direção ao personagem
    anda() {
        this.x = this.x - this.velocidade;
        if(this.x < -this.largura - this.delay) {
            this.x = width;
        }
    }
}