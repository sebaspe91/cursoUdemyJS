const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto);


// Agregar nuevas llaves al objeto
producto.imagen = "imagen.jpg";

console.log(producto);

// elimanar un nuevo objeto
delete producto.disponible;
console.log(producto);