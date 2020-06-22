class Personagem {
    constructor(imagem) {
        this.imagem = imagem;

        //Mapeamento da imagem do personagem
        this.matriz = [
            [0,0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0,270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0,540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0,810],
            [220, 810],
            [440, 810],
            [660, 810],
        ];

        this.position = 0;
    }

    exibe() {
        //image(path, canvasX, canvasY, width, height, imageX, imageY, widthPixels, heightPixels)
        image(this.imagem, 0, height - 150, 110, 135, this.matriz[this.position][0], this.matriz[this.position][1], 220, 270)
    }

    move() {
        this.position++;
        //Percorre a matriz infinitamente
        if(this.position == 16)
            this.position = 0;
    }
}