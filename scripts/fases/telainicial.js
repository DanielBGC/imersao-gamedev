class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo()
        this._texto()
    }
    
    //"métodos privados"
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height)
    }
    
    _texto() {
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        fill('white')

        textSize(100);
        text('As aventuras de', width/2,  100)
        textSize(150);
        text('Hipsta', width/2, 200)
    }
}