const converterX = {
  U: "F",
  "U'": "F'",
  U2:"F2",
  B: "U",
  "B'": "U'",
  B2:"U2",
  D: "B",
  "D'": "B'",
  D2:"B2",
  F: "D",
  "F'": "D'",
  F2:"D2"
};

const converterY = {
  B: "L'",
  "B'": "L",
  B2:"L2",
  R: "B",
  "R'": "B'",
  R2:"B2",
  F: "R",
  "F'": "R'",
  F2:"R",
  L: "F'",
  "L'": "F",
  L2:"F2"
};

const converterZ = {
  R: "U",
  "R'": "U'",
  R2:"U2",
  U: "L'",
  "U'": "L",
  U2:"L2",
  L: "D'",
  "L'": "D",
  L2:"D2",
  D: "R",
  "D'": "R'",
  D2:"R2"
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
  RW: "Rw'",
  "RW'": "Rw",
  LW: "Lw",
  "LW'": "Lw",
  UW: "Uw'",
  "UW'": "Uw",
  DW: "Dw'",
  "DW'": "Dw",
  BW: "Bw'",
  "BW'": "Bw",
  FW: "Fw'",
  "FW'": "Fw"
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
    console.log(alg[i])
  }
  atualizaResultado(alg.reverse().join(" "));
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