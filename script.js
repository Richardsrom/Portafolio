let bars = document.querySelector(".bars");
let menuList = document.querySelector(".menu__list");
let banner = document.querySelector(".banner");
let menuOptions = document.querySelectorAll(".menu__link");
let menu = document.querySelector(".menu");


bars.onclick = function() {
    menuList.classList.toggle("reveal");
    menu.classList.toggle("active");
}

Array.from(menuOptions).forEach(function(option) {

    option.onclick = function() {
        menu.classList.remove("active");
        menuList.classList.toggle("reveal");
    } 
    
});


const input = document.querySelectorAll("input");

input.forEach((input) => {  
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {

    const tipoDeInput = input.dataset.naruto;

    if(input.validity.valid) {
        input.parentElement.classList.remove("contacto__formulario-input--invalid");
        input.parentElement.querySelector(".input__msj-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("contacto__formulario-input--invalid");
        input.parentElement.querySelector(".input__msj-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }

}

const textarea = document.querySelector("textarea");

textarea.addEventListener("blur", () => {
    validaTextarea(textarea);
});


function validaTextarea(textarea) {

    const contenido = textarea.value;
    const pattern = /[\s\S]{20,300}/;
    const mensajeErrorLongitud = "El campo debe tener entre 20 y 300 caracteres";
    const mensajeErrorVacio = "El campo no puede estar vacío";

    if (contenido.trim() === "") {
        textarea.parentElement.classList.add("contacto__formulario-input--invalid");
        textarea.parentElement.querySelector(".input__msj-error").innerHTML = mensajeErrorVacio;
    } else if (pattern.test(contenido)) {
        textarea.parentElement.classList.remove("contacto__formulario-input--invalid");
        textarea.parentElement.querySelector(".input__msj-error").innerHTML = "";
    } else {
        textarea.parentElement.classList.add("contacto__formulario-input--invalid");
        textarea.parentElement.querySelector(".input__msj-error").innerHTML = mensajeErrorLongitud;
    }
}

const tipoDeErrores = [ "valueMissing", "typeMismatch", "patternMismatch", "customError",];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio pendejo",
        patternMismatch: "Debe contener min 10 y max 30 caracteres"
    },
    email: { 
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido pendejo",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "Debe contener min 5 y max 30 caracteres",
    },
}

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}































/*
const nameElement = document.querySelectorAll(".hobbies__caja");

nameElement.forEach((nameElement) => {
    const icon = document.querySelectorAll(".hobbies__icon");

    nameElement.addEventListener("mouseenter", () => {
        icon.forEach((icon) => {
            icon.classList.add("fa-bounce");
        });
    });

    nameElement.addEventListener("mouseleave", () => {
        icon.forEach((icon) => {
            icon.classList.remove("fa-bounce");
        });
    });
});
*/
