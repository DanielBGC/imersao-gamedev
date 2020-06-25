//Essa função será chamada antes de todas as outras
function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')

    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png')
    imagemInimigoTroll = loadImage('assets/imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png')

    imagemGameOver = loadImage('assets/imagens/assets/game-over.png')

    trilhaSonora = loadSound('assets/sons/trilha_jogo.mp3')
    somPulo = loadSound('assets/sons/somPulo.mp3')
}

function setup() {
    //Cria um canvas com tamanho dinâmico (largura e altura da tela)
    createCanvas(windowWidth, windowHeight);

    jogo = new Jogo()
    jogo.startJogo()

    frameRate(30)
}

//Observa se o usuário apertou algum botão
function keyPressed() {
    jogo.keyPressed(key)
}

//Essa função será chamada infinitas vezes
function draw() {
    jogo.draw()

    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

