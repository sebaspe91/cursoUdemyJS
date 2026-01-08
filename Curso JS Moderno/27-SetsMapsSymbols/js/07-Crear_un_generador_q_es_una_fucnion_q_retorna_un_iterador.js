// Generador

// Es una funcion que retorna un iterador

// cuando se vea un * antes del nombre de la funcion es un generador

// Generador estatico

function *crearGenrador (){

    // yield = son valores que se pueden iterar
    yield 1;
    yield 'juan';
    yield 3+3;
    yield true;
}

// acceder a los iteradores
// const iterador = crearGenrador();

// console.log(iterador);

// // activar el generador
// // console.log(iterador.next())

// // activar el generador y ver el valor

// // cada nex va recorriendo los yield de la funcion
// console.log(iterador.next().value)
// console.log(iterador.next().done)
// console.log(iterador.next().value)
// console.log(iterador.next())
// // Cuando ya no hay mas q iterar done: pasa a false es como el fin de la funcion creaIterador
// console.log(iterador.next())

// // esto es esta dormido --- desperto y me dio valores --- duerme de nuevo



// Ejemplo Dinamico
function *generadorCarrito(carrito){
    // como es arreglo
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];        
    }
}


// carrito de compras
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// llamado
const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());