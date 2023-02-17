const numbers = document.querySelectorAll('.number');
const submit = document.querySelector('.enviar');
const avaliacao = document.querySelector('.avaliacao');
const thankyou = document.querySelector('.thankyou');
const ratingSpan = document.querySelector('.rating')
var rating = 0

numbers.forEach(number=>number.addEventListener('click',toggleSelected))
submit.addEventListener('click',enviar);

function toggleSelected() {
    numbers.forEach(number => number.classList.remove('selected'));
    this.classList.toggle('selected');
    rating = this.innerText;
    console.log(rating)
}

function enviar(){
    avaliacao.classList.add('hide');
    thankyou.classList.remove('hide');
    ratingSpan.innerText = rating;
}