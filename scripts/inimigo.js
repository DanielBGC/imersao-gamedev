//Importa tudo que tem na classe Animacao para a classe Inimigo
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY,  largura, altura, larguraSprite, alturaSprite)
    
        this.variacaoY = variacaoY;
        this.velocidade = 10
    }

    //move o inimigo em direção ao personagem
    anda() {
        this.x = this.x - this.velocidade;
        if(this.x < -this.largura)
            this.x = width;
    }
}