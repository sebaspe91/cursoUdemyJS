
const carrito = [
    {nombre: 'Monitor 27 Pulgas', precio: 500},
    {nombre: 'Televisor', precio: 800},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Mause', precio: 15},
    {nombre: 'Cel', precio: 850},
    {nombre: 'Radio', precio: 80}
]



// La forma de recorrer un arreglo con objetos adentro


// forEach

// .map ==> LLena una variable con un arreglo u objeto existente copiando todo el arreglo que recorre en una variable nueva
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;
})

console.table(nuevoArreglo);

// forEach ===> solo recoore el valor no crea variables nuevas

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
})

