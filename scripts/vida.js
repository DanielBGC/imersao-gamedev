class Vida {
    constructor(vidaMax, vidaInicial) {
        this.vidaMax = vidaMax;
        this.vidaInicial = vidaInicial;
        this.vidas = this.vidaInicial;

        this.largura = 50
        this.altura = 50

        this.xInicial = 5;
        this.yInicial = 5;

        this.delay = false
    }

    draw() {
        for(let i = 0; i < this.vidas; i++) {
            const margem = i * 50;
            const posicao = this.xInicial * (1+i)
            image(imagemVida, posicao + margem, this.yInicial, this.largura, this.altura)
        }
    }

    //o personagem só pode ganhar vida novamente após 1 segundo
    delayVida() {
        this.delay = true;
        setTimeout(() => {
            this.delay = false;
        }, 1000)
    }

    ganhaVida() {
        if(this.vidas < this.vidaMax && !this.delay) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }
}