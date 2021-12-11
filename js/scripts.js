document.getElementById("btn_registrar1").addEventListener("click", register);
document.getElementById("btn_iniciarsesion1").addEventListener("click", iniciarsesion);
//variables
var formulario_loginregister = document.querySelector(".contenedor_loginregister");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var cajatrasera_login = document.querySelector(".caja_trasera_login");
var cajatrasera_register = document.querySelector(".caja_trasera_register");

//funciones
function iniciarsesion() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        formulario_loginregister.style.left = "270px";
        formulario_login.style.display = "block";
        cajatrasera_register.style.opacity = "1";
        cajatrasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        formulario_loginregister.style.left = "0px";
        formulario_login.style.display = "block";
        cajatrasera_register.style.display = "block";
        cajatrasera_login.style.display = "none";

    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        formulario_loginregister.style.left = "640px";
        formulario_login.style.display = "none";
        cajatrasera_register.style.opacity = "0";
        cajatrasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "none";
        formulario_loginregister.style.left = "0px";
        formulario_login.style.display = "none";
        cajatrasera_register.style.display = "none";
        cajatrasera_login.style.display = "block";
        cajatrasera_login.style.opacity = "1";
    }
}