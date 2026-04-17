
// CLOSURES

// Es una forma de poder acceder a un valor que esta dentro de una funcion

// -----------------------------------------------------------------------------------
// SINTAXIS PARA CLOSURE

const obtenerCliente = () => {
    const nombre = "Juan";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();





// ---------------------------------------------------------------------------------------

// const cliente = 'Juan';

// function mostrarCliente() {
//     const cliente = 'Pablo';
//     console.log(cliente);
// }

// mostrarCliente();