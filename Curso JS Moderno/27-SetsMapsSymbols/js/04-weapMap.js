// WeakMap()

// Mantiene una serie de datos privados y solo trabajan con objetos

const producto = {
    idProducto :  10 // esta parte queda oculta, pero no se debe almacenar valores importantes
}

// instanciamos
const weakmap = new WeakMap();

// Remplazar valores
weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto))
console.log(weakmap.get(producto))

// weakmap.delete(producto);

// No tiene .size 

// No se puden iterar con foEach

console.log(weakmap)