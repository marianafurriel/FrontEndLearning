const numbers = document.querySelectorAll('.number')

numbers.forEach(number=>number.addEventListener('click',toggleSelected))

function toggleSelected() {
    numbers.forEach(number => number.classList.remove('selected'));
    this.classList.toggle('selected');
}