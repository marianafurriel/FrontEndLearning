novoQuote();
const botao = document.querySelector(".botao");
const pQuote = document.querySelector(".advice");
const adId = document.querySelector(".numAd");

botao.addEventListener("click", novoQuote);

function novoQuote() {
  const response = fetch('https://api.adviceslip.com/advice').
    then((res) => res.json())
    .then((data) => {
      setQuotes(data.slip);
    })
}

function setQuotes(quoteObj) {
  pQuote.textContent = quoteObj.advice;
  adId.textContent = quoteObj.id;
  console.log(quoteObj)
}