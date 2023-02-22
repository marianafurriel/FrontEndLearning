const submit = document.querySelector(".submit");
const inputs = document.querySelectorAll(".input");
const tkyou = document.querySelector(".thankyou");

submit.addEventListener('click',validate);

function validate(){
    inputs.forEach(input=>{
        var classe = ".error-"+input.classList[1]
        if (input.value.length == 0){
            document.querySelector(classe).classList.remove("hide");
            input.classList.add("background-error")
        }
        else{
            document.querySelector(classe).classList.add("hide");
            input.classList.remove("background-error");
        }
    })
    var cont = 0;
    inputs.forEach(input=>{
        if (input.value.length != 0){
            cont++;
        }
        if (cont == 4){
            inputs.forEach(input=>input.value="");
            tkyou.classList.remove("hide");
        }
    })
}