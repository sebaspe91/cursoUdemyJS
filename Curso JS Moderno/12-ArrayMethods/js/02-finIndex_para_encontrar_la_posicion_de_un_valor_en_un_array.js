// finIndex ====> Muestra la ubicacion donde esta el valor a buscar dentro de un arreglo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .findIndex
// para buscar el indice de un valor dentro de un arreglo

let resultado = meses.findIndex((mes) => mes === 'Abril');

console.log(resultado);

// Si quiere saber si encontro o no el elemento es con un if

// comprobar el indice de carrito

// let result = carrito.findIndex((producto) => producto.nombre === 'Tablet');

// console.log(result);


// ensaño para encontrar el indice dentro de un objeto

const indice = carrito.findIndex( producto => producto.nombre === 'Tablet');

console.log(indice);

/*  

    NOTA:
Si encuentra una coincidencia solo muestra la primera que encuentra sy hay varias

*/