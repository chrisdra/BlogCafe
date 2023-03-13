// QuerySelector
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading';
console.log(heading);

// // QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');
console.log(enlaces);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo Enlace';

// agregar la clases
nuevoEnlace.classList.add('navegacion__enlace');

// Eventos //
console.log(1);

window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera por JS, CSS o imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function() {
    console.log('scrolling...');
}

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();

    Validar un formulario


    console.log('Enviando Formulario');
});

// Forma optativa y mas ordenada de generar la alerta en la pestaña de contacto
// Eventos de los Inputs y Textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre'); //selecciona el input para modificar
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto); //llama la funcion realizada en el input
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el formulario

    const { nombre , email , mensaje } = datos; 

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; // Corta la ejecucion del codigo
    }

    // Crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
})

function leerTexto(e) { //esto permite almacenar la informacion en un arreglo y mostrar
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

function mostrarAlerta(mensaje, error) { //Esto realiza lo mismo que scripts.js solo que de manera en el que el codigo este mas optimizado
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild( alerta );

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
