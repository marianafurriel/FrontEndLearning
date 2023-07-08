const converterX = {
  U: "F",
  "U'": "F'",
  B: "U",
  "B'": "U'",
  D: "B",
  "D'": "B'",
  F: "D",
  "F'": "D'"
};

const converterY = {
  B: "L'",
  "B'": "L",
  R: "B",
  "R'": "B'",
  F: "R",
  "F'": "R'",
  L: "F'",
  "L'": "F"
};

const converterZ = {
  R: "U",
  "R'": "U'",
  U: "L'",
  "U'": "L",
  L: "D'",
  "L'": "D",
  D: "R",
  "D'": "R'"
};

const inverter = {
  R: "R'",
  "R'": "R",
  L: "L",
  "L'": "L",
  U: "U'",
  "U'": "U",
  D: "D'",
  "D'": "D",
  B: "B'",
  "B'": "B",
  F: "F'",
  "F'": "F",
  Rw: "Rw'",
  "Rw'": "Rw",
  Lw: "Lw",
  "Lw'": "Lw",
  Uw: "Uw'",
  "Uw'": "Uw",
  Dw: "Dw'",
  "Dw'": "Dw",
  Bw: "Bw'",
  "Bw'": "Bw",
  Fw: "Fw'",
  "Fw'": "Fw"
};

const botaoInv = document.querySelector(".botaoInv");
const botaoX = document.querySelector(".botaoX");
const botaoY = document.querySelector(".botaoY");
const botaoZ = document.querySelector(".botaoZ");
const resultado = document.querySelector(".conversaoAlg");

botaoInv.addEventListener("click", inverte);
botaoX.addEventListener("click", converteX);
botaoY.addEventListener("click", converteY);
botaoZ.addEventListener("click", converteZ);

function pegaAlg() {
  let alg = document.querySelector("#entrada").value;
  alg = alg.toUpperCase().trim().split(" ");
  return alg;
}

function atualizaResultado(alg) {
  resultado.textContent = alg;
  document.querySelector(".resultado").style.visibility = "visible";
}

function inverte() {
  const alg = pegaAlg();
  for (let i = 0; i < alg.length; i++) {
    if (alg[i] in inverter) {
      alg[i] = inverter[alg[i]];
    }
  }
  atualizaResultado(alg.join(" "));
}

function converteX() {
  const alg = pegaAlg();
  for (let i = 0; i < alg.length; i++) {
    if (alg[i] in converterX) {
      alg[i] = converterX[alg[i]];
    }
  }
  atualizaResultado(alg.join(" "));
}

function converteY() {
  const alg = pegaAlg();
  for (let i = 0; i < alg.length; i++) {
    if (alg[i] in converterY) {
      alg[i] = converterY[alg[i]];
    }
  }
  atualizaResultado(alg.join(" "));
}

function converteZ() {
  const alg = pegaAlg();
  for (let i = 0; i < alg.length; i++) {
    if (alg[i] in converterZ) {
      alg[i] = converterZ[alg[i]];
    }
  }
  atualizaResultado(alg.join(" "));
}