function setup() {
  createCanvas(400, 400);
}

let Jacaré = 0;
let Cobra = 0;
let Tiranossauro = 0;
let Tartaruga = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  Verificador();
  desenhaLinhadeChegada();







}

function Verificador(){
if(Jacaré > 350){
  text("Jacaré Venceu!", 70, 200);
  noLoop();
}
if(Cobra > 350){
  text("Cobra Venceu!", 70, 200);
  noLoop();
}
if(Tiranossauro > 350){
  text("Tiranossauro Venceu!", 70, 200);
  noLoop();
}
if(Tartaruga > 350){
  text("Tartaruga Venceu!", 70, 200);
  noLoop();
}
}

function desenhaLinhadeChegada(){
 rect(350, 0, 10, 400);
}

function desenhaJogadores(){
 textSize(30);
 text('🐊', Jacaré , 50);
 text('🐍', Cobra, 150);
 text('🦖', Tiranossauro , 250);
 text('🐢', Tartaruga, 350);
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
        Jacaré += random(10);
    }
    if(key == 's'){
        Cobra += random(10);
    }
    if(key == 'j'){
        Tiranossauro += random(10);
    }
    if(key == 'k'){
        Tartaruga += random(10);
    }
}
