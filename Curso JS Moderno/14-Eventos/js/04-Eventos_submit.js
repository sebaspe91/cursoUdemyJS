// Eventos que funcionan con un formulario

// Hay que seleccionar un formulario valido
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (evento) => {
    // .preventDefault() evita la accion real  que realiza el formulario como es enviarlo a otra direccion. sirve para hacer debuff al codigo haber si esta funcionando correctamente 
    evento.preventDefault();

    // Se puede detenr la accion y despues enviarlo y con esto se puede consumir apis y despues enviarlo con ajax

    // metodo que se envia post
    console.log(evento.target.method);
    // donde va dirigido el formulario url
    console.log(evento.target.action);
});




// Con la declaracion de funcion

formulario.addEventListener('submit', validarFormulario);

// aca debe de ir el parametro evento para que lo lea
function validarFormulario(evento) {
    
    evento.preventDefault();

    console.log(evento.target.method);
    console.log(evento.target.action);
}