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
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     //validar un formulario
    
//     console.log('enviando formulario');
// });

//----------------------------------------------------------------------
//Eventos de los input y textarea
const datos = { //Arreglo que permitira guardar datos de los input
    nombre: '',
    email: '',
    mensaje: ''
}
//Esto permite seleccionar los input en especificos
const nombre = document.querySelector('#nombre');  //Entre parentesis selecciona el id del input
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// nombre.addEventListener('input', function(e) {
//     console.log(e.target.value);
// });
nombre.addEventListener('input', leerTexto);

// email.addEventListener('input', function(e) {
//     console.log(e.target.value);
// });
email.addEventListener('input', leerTexto);

// mensaje.addEventListener('input', function(e) {
//     console.log(e.target.value);
// });
mensaje.addEventListener('input', leerTexto);

//El evento de Submit
constformulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario

    const { nombre, email, mensaje } = datos;
    
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');

        return;
    }

    //Crear la alerta de Enviar correctamente
    mostrarMensaje('Mensaje enviado correctamente');
});

function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value; //Esto permite almacenar los datos en el arreglo Datos

    // console.log(datos);
}

//Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );

    //Esto permitira que el mensaje desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}
//Muestra mensaje de enviado
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild( alerta );

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}