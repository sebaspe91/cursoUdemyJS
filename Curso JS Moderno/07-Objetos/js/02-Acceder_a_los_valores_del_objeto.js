// Como acceder a los valores de un objeto

const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto);

// Para acceder a un elemento especifico de un objeto se hace por medio del punto "."

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);


// existe otra forma que no es comun pero aveces es muy util

console.log(producto['nombre']);