let cenario;
let imagemCenario;

let personagem;
let imagemPersonagem;

let inimigo;
let imagemInimigo;

let inimigoTroll;
let imagemInimigoTroll;

let inimigoVoador;
let imagemInimigoVoador;

let trilhaSonora;
let somPulo;

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

//Mapeamento da imagem do troll
const matrizInimigoTroll = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
]

//Mapeamento da imagem do inimigo voador
const matrizInimigoVoador = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
]

const inimigos = []

//Essa função será chamada antes de todas as outras
function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png')
    imagemInimigoTroll = loadImage('assets/imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png')
    trilhaSonora = loadSound('assets/sons/trilha_jogo.mp3')
    somPulo = loadSound('assets/sons/somPulo.mp3')
}

function setup() {
    //Cria um canvas com tamanho dinâmico (largura e altura da tela)
    createCanvas(windowWidth, windowHeight);
    startSketch()

    frameRate(30)
}

//Observa se o usuário apertou algum botão
function keyPressed() {
    if(key === 'ArrowUp' || key === 'w' || keyCode === 32) {
        personagem.pula()
    }
    
    if(key === 'Enter') {
        //reseta o jogo quando apertar a tecla Enter
        startSketch()
    }
}

//Reseta todo o jogo quando chamada
function startSketch() {
    trilhaSonora.stop()
    cenario = new Cenario(imagemCenario, 5)
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 260, 100, 75, 200, 150, 13, 1200)
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 8, 1500)

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigoTroll)

    //Executa a música apenas uma vez
    // trilhaSonora.play()

    //Executa a música várias vezes
    // trilhaSonora.loop()
    loop()
}
  
//Essa função será chamada infinitas vezes
function draw() {
    // background(imagemCenario);
    cenario.exibe();
    cenario.move();

    personagem.exibe();
    personagem.move();
    personagem.aplicaGravidade();
    personagem.anda()

    if(keyIsDown(RIGHT_ARROW))
        personagem.anda('frente')
    if(keyIsDown(LEFT_ARROW))
        personagem.anda('tras')

    inimigos.forEach(inimigo => {
        inimigo.exibe();
        inimigo.move();
        inimigo.anda();
        if(personagem.estaColidindo(inimigo)) {
            noLoop()
            trilhaSonora.stop()
        }
    });
   
    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

