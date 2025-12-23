// Agreagar elementos de forma Declarativa

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

// cel
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

// Teclado
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}


// Formna declarativa

// es la forma que no modifica esta variable si no que crea una nueva con la que trabaja 

// colocar el elemnto al incio, se hace asi por q el carrito es const
let resultado = [...carrito, producto]; // copia la estructura del carrito y le agrega el producto
resultado = [...resultado, producto2]; // agrega el resultado q es un arreglo y le agrega producto2

// para colocar el objeto o elelemto al inicio es
resultado = [producto3, ...resultado];



console.table(resultado);
