

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

const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - Precio ${producto.precio}`);

console.log(nuevoArreglo);

// forEach

carrito.forEach((producto) => console.log(`${producto.nombre} - Precio ${producto.precio}`));

// ejemplo mio

const arregloJson = carrito.map(producto => `nombre:${producto.nombre}, precio:${producto.precio}`)

console.log(arregloJson);
