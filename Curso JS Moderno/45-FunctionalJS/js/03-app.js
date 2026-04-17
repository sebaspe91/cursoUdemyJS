const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


// es lo mismo q utilizar los array metodos

const resultado = carrito.filter(producto => {
    return producto.precio > 400;
});

console.log(resultado); // retorna solo los valores mayores a 400

// Sin envargo un orden function es una funcion que toma oretorna una funcion como argumento

// EJEMPLO

// se crea una funcion que realice la operacion 
const mayor400 = producto => {
    return producto.precio > 400;
}

const resultado2 = carrito.filter(mayor400);
console.log(resultado2);