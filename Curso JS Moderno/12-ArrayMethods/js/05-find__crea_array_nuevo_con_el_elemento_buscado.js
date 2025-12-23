// .find()

// Crea un nuevo arreglo basado en la condicion que este ejecutando y pasa todo los valores de esa busqueda

// NOTA:    Solo va retonar el primer valor que encuentre


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// con forEach

let resultado = '';
carrito.forEach((Producto, indice) => {
    if(Producto.nombre === 'Tablet'){
        resultado = carrito[indice];
        console.log(indice);
    }
});

console.log(resultado);

// con .find()

let result = carrito.find((Producto) => Producto.nombre === 'Tablet');

console.log(result);