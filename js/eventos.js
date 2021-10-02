/*Eventos*/
const hola = document.querySelector('#mapa');
hola.addEventListener('click',()=> {
    Notification.requestPermission()
    // .then(resultado =>{
    //     console.log(`el permiso es ${resultado}`)
    // });
    console.log('hola');
})

/*EVENTOS*/ 
function imprimir() {
    console.log('hola que tal');
}
console.log(1);
window.addEventListener('load', imprimir()//EESTE ESPERA HASTA QUE ESE CARGA LA HOJA DE ESTILO
);
window.onload =  function() {
    console.log(4);
};
document.addEventListener('DOMContentLoaded', function () {//SOLO CARGA EL HTML, NO EL CSS
    console.log(3);
})
console.log(5);

//SCROLL EVENT
// window.onscroll = function (e) {
//     console.log(e);
// }

// //SELECCIONAR EVENTOS Y ASOCIARLES 
// const botonFormulario = document.querySelector('#boton');
// botonFormulario.addEventListener('click',function (Evento) {
//     console.log(Evento);
//     // Evento.preventDefault();
//     imprimir();
// });
//EVENTOS INPUTS Y TEXT AREA
const datos = {
    nombre : '',
    telefono: '',
    correo :'',
    mensaje : ''
}

const nombre= document.querySelector('#nombre');
const numero= document.querySelector('#telefono');
const correo= document.querySelector('#correo');
const mensaje= document.querySelector('#mensaje');
const Formulario = document.querySelector('.formulario');
//Añadiendo un texto en la pantalla 

nombre.addEventListener('input',leerDatos);
correo.addEventListener('input',leerDatos);
mensaje.addEventListener('input',leerDatos);
numero.addEventListener('input',leerDatos);

Formulario.addEventListener('submit',function (e) {
    e.preventDefault();
    const  {nombre, telefono, correo, mensaje} =  datos;
    console.log(nombre);
    console.log(telefono);
    console.log(correo);
    console.log(mensaje);
    if (nombre==='' || telefono ==='' || correo === ''|| mensaje==='') {
        enviarError('Llenar todos los campos');
        return;
    }
    enviarCorrecto('enviado Correctamente');
});


function leerDatos(e) {
    console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
    // console.log(datos);
}
function enviarError(mensaje) {
    const error= document.createElement('P');
    error.textContent='Llene todos los campos';
    error.classList.add('errorform');
    console.log(error);
    
    const htmlE = document.querySelector('.formulario');
    htmlE.appendChild(error);
    console.log(mensaje);
    setTimeout(() => {
        error.remove();
    }, 4000);
}
function enviarCorrecto(mensaje) {
    const right = document.createElement('P');
    right.textContent = 'enviado Satisfactoriamente';
    right.classList.add('right');

    console.log(mensaje);
    const correctoHtml = document.querySelector('.formulario');
    correctoHtml.appendChild(right);
    setTimeout(() => {
        right.remove();
    }, 5000);
}