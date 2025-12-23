// Continue

// for(let i=0; i<=10; i++){
    
//     if(i === 5){
//         console.log("Cinco");
//     }else{
//         console.log(i);
//     }
// }


// CONTINUE

// for(let i=0; i<=10; i++){
    
//     if(i === 5){
//         console.log("Cinco");
//         continue;
//     }
//     console.log(i);
    
// }

//  break  ===> es para terminar de recorrer el ciclo 

// Ejemplo

// uno de los productos debe de tener descuento

// vasriable con el nombre del producto con descuento
let productoDescuento = "Cel";

const carrito = [
    {nombre: 'Monitor 27 Pulgas', precio: 500},
    {nombre: 'Televisor', precio: 800, descuento:true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Mause', precio: 15},
    {nombre: 'Cel', precio: 850},
    {nombre: 'Radio', precio: 80}
]

// for para iterar el carrito

// for(let i=0; i<carrito.length; i++){
    
//     if(carrito[i].nombre === productoDescuento){
//         console.log(`Producto: ${carrito[i].nombre} tiene descuento del 20%`);
//         continue;
//     }

//     console.log(`Producto: ${carrito[i].nombre} Precio: $${carrito[i].precio}`)

// }


// Forma como la hacen en el curso udemy
for(let i=0; i<carrito.length; i++){
    
    if(carrito[i].descuento){
        console.log(`Producto: ${carrito[i].nombre} tiene descuento del 20%`);
        continue;
    }
    // si se ejecuta el contine esta linea no se ejecuta si no en la proxima
    console.log(`Producto: ${carrito[i].nombre} Precio: $${carrito[i].precio}`)

}