const isValidEmail = (email) => {
  const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}







const form = document.querySelector('form');

const nomeInput = document.getElementById('nomeInput');
const erroMsgNome = document.getElementById('erroMsgNome');

const emailInput = document.getElementById('emailInput');
const erroMsgEmail = document.getElementById('erroMsgEmail');

const telefoneInput = document.getElementById('telefoneInput');
const erroMsgTelefone = document.getElementById('erroMsgTelefone');

const textoInput = document.getElementById('textoInput');
const erroMsgTexto = document.getElementById('erroMsgTexto');



var contadorValidate = 0;


form.addEventListener("submit", (e) => { 
  contadorValidate = 0;
  e.preventDefault();
  validarNome();
  validarEmail();
  validarTelefone();
  validarTexto();
  enviarSubmit();

})

/* Validando Nome */

function validarNome() {
  if(nomeInput.value.length <= 3) {
    erroMsgNome.innerText = "Digite seu nome.";
    nomeInput.style.border = "2px solid red";
  } else {
    console.log("Nome Verificado");
    contadorValidate += 1  
    console.log(contadorValidate)  
  }
}

nomeInput.addEventListener('input', () => {
  if(nomeInput.value.length > 3) {
    erroMsgNome.innerText = "";
    nomeInput.style.border = "none";
  }  
})

/* Validando Email */

function validarEmail() {
  if(isValidEmail(emailInput.value)){
    console.log("Email Verificado");
    contadorValidate += 1  
    console.log(contadorValidate)
  } else {
    erroMsgEmail.innerText = "Digite seu email.";
    emailInput.style.border = "1px solid red";
  }
}

emailInput.addEventListener('input', () => {
  if(isValidEmail(emailInput.value)){
    erroMsgEmail.innerText = "";
    emailInput.style.border = "none";
  } 
})



/* Validando Telefone */

function validarTelefone() {
 if(telefoneInput.value === "") {
   telefoneInput.style.border = "2px solid red";
   erroMsgTelefone.innerText = "Digite seu numero com o DDD";
 } else {
   console.log("Telefone Validado");
   contadorValidate += 1  
   console.log(contadorValidate)
 }
}

telefoneInput.addEventListener('input', () => {
  if(telefoneInput.value.length == 11){
    telefoneInput.style.border = "none";
    erroMsgTelefone.innerText = "";
  }
    
})





/* Validando Texto */

function validarTexto() {
 if(textoInput.value === "") {
   textoInput.style.border = "2px solid red";
   erroMsgTexto.innerText = "Digite sua mensagem";
 } else {
   console.log("Telefone Validado");
   contadorValidate += 1  
   console.log(contadorValidate)
 }
}

textoInput.addEventListener('input', () => {
    textoInput.style.border = "none";
    erroMsgTexto.innerText = "";
})





function enviarSubmit(){
  if(contadorValidate == 4) {
    form.submit();
  }
}
