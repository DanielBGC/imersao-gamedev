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
    startSketch()

    frameRate(30)
}

//Reseta todo o jogo quando chamada
function startSketch() {
    trilhaSonora.stop()

    //Esvazia o array sempre que um jogo jogo é iniciado
    while(inimigos.length)
        inimigos.pop()

    cenario = new Cenario(imagemCenario, 5)
    pontuacao = new Pontuacao()
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270, 20, 10, 40, 10)

    //constructor(matriz, imagem, X, Y, largura, atura, larguraSprite, alturaSprite, velocidade, delay, precisaoX, precisaoY, precisaoLargura, precisaoAltura)
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100, 20, 30, 20, 30)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 260, 100, 75, 200, 150, 13, 100, 30, 50, 50, 70)
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 8, 100, 100, 100, 150, 130)

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigoTroll)

    //Executa a música apenas uma vez
    // trilhaSonora.play()

    //Executa a música várias vezes
    // trilhaSonora.loop()
    loop()
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
  
//Essa função será chamada infinitas vezes
function draw() {
    // background(imagemCenario);
    cenario.exibe();
    cenario.move();

    pontuacao.exibe();
    pontuacao.incremento();

    personagem.exibe();
    personagem.move();
    personagem.aplicaGravidade();
    personagem.anda()

    if(keyIsDown(RIGHT_ARROW))
        personagem.anda('frente')
    if(keyIsDown(LEFT_ARROW))
        personagem.anda('tras')

    const inimigo = inimigos[indexInimigoAtual];

    //Condição pra saber se o inimigo está visivel na tela
    const inimigoVisivel = inimigo.x < - inimigo.largura;

    inimigo.exibe();
    inimigo.move();
    inimigo.anda();

    if(inimigoVisivel) {
        // indexInimigoAtual++;
        // if(indexInimigoAtual > 2) {
        //     indexInimigoAtual = 0;
        // }

        //randomiza a ordem de aparição dos inimigos
        indexInimigoAtual = parseInt(random(0,inimigos.length))

        //randomiza a velocidade de cada inimigo
        inimigo.velocidade = parseInt(random(10,30))
    }

    if(personagem.estaColidindo(inimigo, inimigo.precisaoX, inimigo.precisaoY, inimigo.precisaoLargura, inimigo.precisaoAltura)) {
        image(imagemGameOver, width/2 - 200, height/2 - 200)
        noLoop()
        trilhaSonora.stop()
    }
   
    //circle(x, y, raio)
    // circle(mouseX, mouseY, 10)
}

