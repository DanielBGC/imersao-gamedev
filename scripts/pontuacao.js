class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textSize(50);
        textAlign(CENTER)
        fill('white')
        text("Tempo de sobrevivêcia: " + parseInt(this.pontos), width/2, 50);
    }

    incremento() {
        //velocidade com que a pontuação aumenta
        this.pontos += 0.035;
    }
}