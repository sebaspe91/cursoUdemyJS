
const producto = 'Monitor 20 pulgadas';

const precio = '30 USD';

// Concatenar 1
console.log(producto.concat(" ",precio));
// concatenar 2
console.log(producto + " Con un precio de: " + precio);

// Opcion 3
// Se hace para concatenar con las comillas inclinadas yh camboia el + por ${nom_variable}

console.log(`El Producto ${producto} tiene un precio de $${precio}`);