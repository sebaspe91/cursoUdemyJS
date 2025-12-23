

// Ciclos for

// for(let i = 0; i < 10; i += 2){
//     console.log(`Numero ${i}`);
// }


// for(let i = 0; i < 20; i++){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es Impar`);
//     }
// }


const carrito = [
    {nombre: 'Monitor 27 Pulgas', precio: 500},
    {nombre: 'Televisor', precio: 800},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Mause', precio: 15},
    {nombre: 'Cel', precio: 850},
    {nombre: 'Radio', precio: 80}
]

// break    continue
for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}

// pares
for (let i = 0; i < 100; i++) {
    
    let res = i % 2 == 0 ? `El numero ${i} es Par` : `El numero ${i} es Impar`;
   
    console.log(res);
}