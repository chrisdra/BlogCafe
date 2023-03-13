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
nombre.addEventListener('input', leerTexto); //llama la funcion realizada en el input

// email.addEventListener('input', function(e) {
//     console.log(e.target.value);
// });
email.addEventListener('input', leerTexto);

// mensaje.addEventListener('input', function(e) {
//     console.log(e.target.value);
// });
mensaje.addEventListener('input', leerTexto);

//El evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar el formulario

    const { nombre, email, mensaje } = datos;
    
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return; // Corta la ejecucion del codigo
    }

    // Crear la alerta de Enviar correctamente
    mostrarEnvio('Mensaje enviado correctamente');
});

function leerTexto(e) { //esto permite almacenar la informacion en un arreglo y mostrar
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

//---------Creacion de Alerta de mensaje------------
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

function mostrarEnvio(mensaje) {
    const envio = document.createElement('P');
    envio.textContent = mensaje;
    envio.classList.add('correcto');

    formulario.appendChild( envio );

    setTimeout(() => {
        envio.remove();
    }, 5000);
}
