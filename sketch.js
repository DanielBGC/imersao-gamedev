let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let personagem;
let inimigo;
let trilhaSonora;

const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
  ]

//Essa função será chamada antes de todas as outras
function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png')
    trilhaSonora = loadSound('assets/sons/trilha_jogo.mp3')
}

function setup() {
    //Cria um canvas com tamanho dinâmico (largura e altura da tela)
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 5)
    personagem = new Personagem(imagemPersonagem)
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104)


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
    personagem.move();
    
    inimigo.exibe();
    inimigo.move();

    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

