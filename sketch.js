let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let cenario;
let personagem;
let inimigo;
let trilhaSonora;

//Mapeamento da imagem do personagem
const matrizPersonagem = matriz = [
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
]

//Mapeamento da imagem do inimigo
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
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270)
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104)


    //Executa a música apenas uma vez
    // trilhaSonora.play()

    //Executa a música várias vezes
    // trilhaSonora.loop()

    frameRate(30)
}

//Observa se o usuário apertou algum botão
function keyPressed() {
    if(key === 'ArrowUp') {
        personagem.pula()
    }
}
  
//Essa função será chamada infinitas vezes
function draw() {
    // background(imagemCenario);
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.move();
    personagem.aplicaGravidade();
    
    inimigo.exibe();
    inimigo.move();
    inimigo.anda();

    if(personagem.estaColidindo(inimigo)) {
        noLoop()
    }

   

    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

