// sets

// un sets permite crear una lista de valores sin duplicados.

// Hace lo mismo q una lista que revisa si dento tiene valores iguales y los quita. La diferencia es que el sets es mucho mas rapido y sirve para valores masivos

const carrito = new Set();

// los sets utiliza sus propios metodos 

// Los set solo guardan valores no llaves
carrito.add('Camisa');
carrito.add('Disco N1');
carrito.add('Disco N2');
carrito.add('Disco N3');
carrito.add('Camisa');

// la mayusculas y minusculas son diferentes valores
carrito.add('camisa');

// metodo para mirar el tamaño de la lista set   .size
let longitud = carrito.size;
console.log(longitud)

// Si hay un valor en la lista
const encontrado = carrito.has('Camisa');
console.log(encontrado)

// borrar un valor
carrito.delete('Disco N3');

// borrar todo
// carrito.clear();

// los set son iterables for
carrito.forEach(producto => {
    console.log(producto)
});

// EJEMPLO si tenemos una lista donde queremos solo los datos neceseraios q no se repitan
const numeros = [10,20,30,40,50,10,20];

const numUnicos = new Set(numeros);

console.log(numUnicos)