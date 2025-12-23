// .filter  ===> crea un nuevo arreglo con los valores buscados en un rango indicado en una condicion

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Tablet', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Se utiliza para buscar varios datos, o para fuiltar un rango de informacion

let resultado;
let dato = 'Tablet';

resultado = carrito.filter((producto) => producto.precio > 400);

resultado = carrito.filter((producto) => producto.precio < 600 );

resultado = carrito.filter( (producto) => producto.nombre !== 'Audifonos' );

resultado = carrito.filter( (producto) => producto.nombre ==='Audifonos');

resultado = carrito.filter((producto) => producto.nombre === dato && producto.precio === 400);

console.log(resultado);


/* 
Explicacion de la sintaxis

    let array_nuevo = array_objetivo.filter(valor => condicion);

    
*/