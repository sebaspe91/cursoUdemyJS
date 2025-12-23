
// const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

// pendientes.forEach( (pendiente, indice) => console.log(`${indice} : ${pendiente}`));


// Otro ejemeplo

const carrito = [
    {nombre: 'Monitor 27 Pulgas', precio: 500},
    {nombre: 'Televisor', precio: 800},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Mause', precio: 15},
    {nombre: 'Cel', precio: 850},
    {nombre: 'Radio', precio: 80}
]

carrito.forEach((producto) => console.log(`${producto.nombre} = $${producto.precio}`));

// recorre el arreglo y lo copia en una nueva variable
const nuevoArray = carrito.map((producto) => `${producto.nombre} = $${producto.precio}`);

console.log(nuevoArray);