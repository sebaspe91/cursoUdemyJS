// Forma Interactiva
// Eliminar un objeto

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

// cel
const producto4 = {
    nombre: 'Celular 2',
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
carrito.push(producto4);

// Para agregar a la lista en la primera posicion
carrito.unshift(producto3);
console.table(carrito);


// Eliminar ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

// // Eliminar al inicio del arreglo
// carrito.shift();
// console.table(carrito);


// Para eliminar un elemento de una posicion del medio o una posicion especifica

carrito.splice(1, 2); // el primer numero es para la posicion donde incia a cortar o eliminar y el segundo numero es cantidad de elementos que se eliminan

console.table(carrito);