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
const resultado = document.querySelector(".conversaoAlg");

botaoInv.addEventListener("click",inverte);
botaoX.addEventListener("click",converteX);
botaoY.addEventListener("click",converteY);
botaoZ.addEventListener("click",converteZ);

function atualizaResultado(alg){
  resultado.textContent = alg;
  document.querySelector(".resultado").style.visibility = "visible";
}


function inverte(){
  let alg = document.querySelector("#entrada").value;
  alg = alg.toUpperCase();
  alg = alg.trim().split(" ");
  console.log(alg[0])
  if(alg[0[1]]=='\''){
    alg[0[1]] = '';
  }
  else{
    alg[0[1]] = '\'';
  }
  
  
  atualizaResultado(alg)
}

