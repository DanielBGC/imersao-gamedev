function setup() {
    //Cria um canvas com tamanho dinâmico (largura e altura da tela)
    createCanvas(windowWidth, windowHeight);
}
  
//Essa função será chamada infinitas vezes
function draw() {
    background(200);

    //circle(x, y, raio)
    circle(mouseX, mouseY, 20)
}