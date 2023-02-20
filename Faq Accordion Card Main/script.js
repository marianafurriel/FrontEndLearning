const setas = document.querySelectorAll('.seta');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');

setas.forEach(seta=>seta.addEventListener('click',toggleHide));

function toggleHide(){
    var classe = "."+this.classList[0];
    var answerToShow = document.querySelector(classe+'-answer');
    var questionBold = document.querySelector(classe+'-question');
    answers.forEach(answer=>{
        if (answer != answerToShow){
            answer.classList.add('hide');
        }
    });
    setas.forEach(seta=>{
        if (seta != this){
            seta.classList.remove('rotate');
        }
    });
    questions.forEach(question=>{
        if (question != questionBold){
            question.classList.remove('bold');
        }
    })
    answerToShow.classList.toggle('hide');
    this.classList.toggle('rotate');
    questionBold.classList.toggle('bold');
}
