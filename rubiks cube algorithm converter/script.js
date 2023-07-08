const converterX ={
  U:"F",
  B:"U",
  D:"B",
  F:"D"};

const converterY = {
  B:"L'",
  R:"B",
  F:"R",
  L:"F'"};

const converterZ = {
  R:"U",
  U:"L'",
  L:"D'",
  D:"R"};

const inverter = {};

const botaoInv = document.querySelector(".botaoInv");
const botaoX = document.querySelector(".botaoX");
const botaoY = document.querySelector(".botaoY");
const botaoZ = document.querySelector(".botaoZ");

botaoInv.addEventListener("click",inverte);
botaoX.addEventListener("click",converteX);
botaoY.addEventListener("click",converteY);
botaoZ.addEventListener("click",converteZ);

function inverte(){
  const alg = document.querySelector("#entrada").value;
  console.log(alg)
}

