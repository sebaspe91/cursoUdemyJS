// .every()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// todos los elementos de un arreglo debe de cumplir esa condicion para que retorne un true

const result = carrito.every((producto) => producto.precio < 1000);

console.log(result);