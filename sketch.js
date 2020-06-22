let imagemCenario;
let imagemPersonagem;
let cenario;
let trilhaSonora;

//Essa função será chamada antes de todas as outras
function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    trilhaSonora = loadSound('assets/sons/trilha_jogo.mp3')
}

function setup() {
    //Cria um canvas com tamanho dinâmico (largura e altura da tela)
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3)

    //Executa a música apenas uma vez
    // trilhaSonora.play()

    //Executa a música várias vezes
    trilhaSonora.loop()
}
  
//Essa função será chamada infinitas vezes
function draw() {
    // background(imagemCenario);
    cenario.exibe();
    cenario.move();

    //image(path, canvasX, canvasY, width, height, imageX, imageY, widthPixels, heightPixels)
    image(imagemPersonagem, 0, height - 150, 110, 135, 0, 0, 220, 270)

    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

class Cenario {
    constructor(imagem, velocidade) {
        this.imagem = imagem;
        this.velocidade = velocidade;
        this.x1 = 0;
        this.x2 = width;
    }
    exibe() {
        image(this.imagem, this.x1, 0, width, height)
        image(this.imagem, this.x2, 0, width, height)
    }

    move() {
        this.x1 -= this.velocidade
        this.x2 -= this.velocidade

        if(this.x1 < -width)
            this.x1 = width;
        if(this.x2 < -width)
            this.x2 = width;
    }
}