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
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    //Crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value; //Esto permite almacenar los datos en el arreglo Datos

    // console.log(datos);
}


//---------Creacion de Alerta de mensaje------------
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
//Muestra un error en pantalla
// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild( error );

//     //Esto permitira que el mensaje desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }
// //Muestra mensaje de enviado
// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');

//     formulario.appendChild( alerta );

//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }