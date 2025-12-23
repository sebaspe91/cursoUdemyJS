const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto);

// extraer el valor de la propiedad de un producto y asignarlo a una variable

const nombre2 = producto.nombre;

console.log(nombre2);


// la nueva forma se hace en un mismo paso
// extrae el objeto y crea la variable en un mismo paso 

// permite extraer la propiedad con el valor todo en un solo paso 

const { nombre, precio } = producto;

console.log(nombre);
console.log(precio);