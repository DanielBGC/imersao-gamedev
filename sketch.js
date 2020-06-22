let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
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
    cenario = new Cenario(imagemCenario, 5)
    personagem = new Personagem(imagemPersonagem)


    //Executa a música apenas uma vez
    // trilhaSonora.play()

    //Executa a música várias vezes
    // trilhaSonora.loop()

    frameRate(30)
}
  
//Essa função será chamada infinitas vezes
function draw() {
    // background(imagemCenario);
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.move()

    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

