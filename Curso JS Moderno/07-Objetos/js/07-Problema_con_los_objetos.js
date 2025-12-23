const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto);

// Se pueden cambiar los valores de las propiedades de los objetos y eso es un problema en algunos casos
producto.disponible = false;
console.log(producto);