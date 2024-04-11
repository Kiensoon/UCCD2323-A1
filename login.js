const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');}) ;

loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');}) ;

btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');}) ;

iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');}) ;

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-off-outline.svg";
    }
    else{
        password.type = "password";
        eyeicon.src = "eye-outline.svg";
    }
}