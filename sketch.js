function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0, 0];
let yJogador = [50, 130, 210, 290, 370];
let Jogador = ["🐊", "🐍", "🦖", "🐢", "🦎"];
let Teclas = ["a", "s", "j", "k", "l"];
let Quantidade = Jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  Verificador();
  desenhaLinhadeChegada();
}

function Verificador() {
  textSize(50);
  for (let i = 0; i < Quantidade; i++) {
    if (xJogador[i] > 350) {
      text(Jogador[i] + " Venceu!", 60, 200);
      noLoop();
    }
  }
}

function desenhaLinhadeChegada() {
  fill("white");
  rect(350, 0, 15, 400);
  fill("black");
  for (let YAtual = 0; YAtual < 400; YAtual += 20) {
    rect(350, YAtual, 15, 10);
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🌵", 150, 330);
  textSize(35);
  for (let i = 0; i < Quantidade; i++) {
    text(Jogador[i], xJogador[i], yJogador[i]);
  }
  textSize(55);
  text("🌵", 250, 100);
}

function ativaJogo() {
  if (focused == true) {
    background("rgb(255,246,108)");
  } else {
    background("rgb(238,229,229)");
  }
}

function keyReleased() {
  for (let i = 0; i < Quantidade; i++) {
    if (key == Teclas[i]) {
      xJogador[i] += random(10);
    }
  }
}
