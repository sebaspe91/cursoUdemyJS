// Iteradores

// asi se construye los iteradores

// Se creaun iterador de la siguiente forma 

function crearIterador(carrito){

    // iterador inicia en 0
    let i = 0;

    // retorna una funcion
    return {
        // nombre de funcion
        siguiente: () => {
            // hasta que elementos va a iterar
            // si i es mayor o igual al tamaño del carrito quiere decir q llegamos a l fin y qda con valor trur
            const fin = (i >= carrito.length); 

            // valores del carrito
            // si fin es false ? pasa al valor siguiente de lo contrario o sea q llego a su fin tira undefined
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }

        }
    }
}


// Afuera de la funcion
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());