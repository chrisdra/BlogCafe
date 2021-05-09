// QuerySelector
// const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
// //heading.textContent = 'Nuevo Heading';
// console.log(heading);

// // QuerySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// // enlaces[0].textContent = 'Nuevo Texto para Enlace';
// // enlaces[0].classList.add('nueva-clase');
// //enlaces[0].classList.remove('navegacion__enlace');
// econsole.log(enlaces);

// //Generar un nuevo enlace
// const nuevoEnlace = document.createElement('A')

// //Agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html';

// //Agregar el texto
// nuevoEnlace.textContent = 'Un nuevo Enlace';

// //agregar la clases
// nuevoEnlace.classList.add('navegacion__enlace');


// <a href="nosotros.html" class="nuevo-enlace">Nosotros</a>

// console.log(nuevoEnlace);

//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();

    //validar un formulario
    
    console.log('enviando formulario');
});

//Eventos de los input y textarea
const nombre = document.querySelector('#nombre');

nombre.addEventListener('input', function(e) {
    console.log(e);
});