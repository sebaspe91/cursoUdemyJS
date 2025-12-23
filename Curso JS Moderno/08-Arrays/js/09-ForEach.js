
const carrito = [
    {nombre: 'Monitor 27 Pulgas', precio: 500},
    {nombre: 'Televisor', precio: 800},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Mause', precio: 15},
    {nombre: 'Cel', precio: 850},
    {nombre: 'Radio', precio: 80}
]



// La forma de recorrer un arreglo con objetos adentro
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`);
}

// forEach

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
})

carrito.forEach(element => {
    console.log(`${element.nombre} - Precio ${element.precio}`);
});