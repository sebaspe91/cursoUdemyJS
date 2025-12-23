
// For OF ===> Itera sobre arreglos


const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];


// Otro ejemeplo

const carrito = [
    {nombre: 'Monitor 27 Pulgas', precio: 500},
    {nombre: 'Televisor', precio: 800},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Mause', precio: 15},
    {nombre: 'Cel', precio: 850},
    {nombre: 'Radio', precio: 80}
]


// FOR OF

for(let i of pendientes){
    console.log(i);
}


// valor de array
for(let producto of carrito){
    console.log(producto.nombre);
}