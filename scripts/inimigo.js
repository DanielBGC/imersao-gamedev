//Importa tudo que tem na classe Animacao para a classe Inimigo
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, precisaoX, precisaoY, precisaoLargura, precisaoAltura) {
        super(matriz, imagem, x, variacaoY,  largura, altura, larguraSprite, alturaSprite, precisaoX, precisaoY, precisaoLargura, precisaoAltura)

        this.velocidade = velocidade;
        this.x = width 

        this.precisaoX = precisaoX;
        this.precisaoY = precisaoY;
        this.precisaoAltura = precisaoAltura;
        this.precisaoLargura = precisaoLargura;
    }

    //move o inimigo em direção ao personagem
    anda() {
        this.x = this.x - this.velocidade;
    }

    aparece() {
        this.x = width
    }

}