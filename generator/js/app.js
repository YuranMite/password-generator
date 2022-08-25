let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPass = document.querySelector('#container-pass');

let charset = "abcdefghijklmnompqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&?@";
let novaSenha ="";

sizePassword.innerHTML = sliderElement.value;

 //Funcao que permite alterar o valor de tamanho de caracteres da senha
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPass.classList.remove("hidden");
    password.innerHTML = pass;
    //console.log(pass); -> este é o resultado da senha gerada
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);

}