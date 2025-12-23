// Cramos un Carrito de compras

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



// Agregamos al Carrito de compras en la ultima posicion
carrito.push(producto);
carrito.push(producto2);

// Para agregar a la lista en la primera posicion
carrito.unshift(producto3);

console.table(carrito);
