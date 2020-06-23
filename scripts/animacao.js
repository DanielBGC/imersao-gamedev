class Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.y = height - this.altura - 15;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.position = 0;
    }

    exibe() {
        //image(path, canvasX, canvasY, width, height, imageX, imageY, widthPixels, heightPixels)
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.position][0], this.matriz[this.position][1], this.larguraSprite, this.alturaSprite)
    }

    move() {
        this.position++;
        //Percorre a matriz infinitamente
        if(this.position >= this.matriz.length - 1)
            this.position = 0;
    }
}