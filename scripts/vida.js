class Vida {
    constructor(vidaMax, vidaInicial) {
        this.vidaMax = vidaMax;
        this.vidaInicial = vidaInicial;
        this.vidas = this.vidaInicial;

        this.largura = 50
        this.altura = 50

        this.xInicial = 5;
        this.yInicial = 5;
    }

    draw() {
        for(let i = 0; i < this.vidas; i++) {
            const margem = i * 50;
            const posicao = this.xInicial * (1+i)
            image(imagemVida, posicao + margem, this.yInicial, this.largura, this.altura)
        }
    }

    ganhaVida() {
        if(this.vidas < this.vidaMax) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }
}