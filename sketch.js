function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  Verificador();
  desenhaLinhadeChegada();







}

function Verificador(){
if(xJogador1 > 350){
  text("Jogador 1 Venceu!", 70, 200);
  noLoop();
}
if(xJogador2 > 350){
  text("Jogador 2 Venceu!", 70, 200);
  noLoop();
}
if(xJogador3 > 350){
  text("Jogador 3 Venceu!", 70, 200);
  noLoop();
}
if(xJogador4 > 350){
  text("Jogador 4 Venceu!", 70, 200);
  noLoop();
}
}

function desenhaLinhadeChegada(){
 rect(350, 0, 10, 400);
}

function desenhaJogadores(){
 textSize(30);
 text('🐊', xJogador1 , 50);
 text('🐍', xJogador2, 150);
 text('🦖', xJogador3 , 250);
 text('🐢', xJogador4, 350);
}

function ativaJogo(){
    if (focused == true){
  background('rgb(255,246,108)');
} else {
  background ('rgb(238,229,229)');
}
}

function keyReleased() {
    if (key === 'a') {
        xJogador1 += random(10);
    }
    if(key == 's'){
        xJogador2 += random(10);
    }
    if(key == 'j'){
        xJogador3 += random(10);
    }
    if(key == 'k'){
        xJogador4 += random(10);
    }
}
