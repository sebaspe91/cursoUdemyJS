

// Son metodos para encontrar valores dentro de arrays y objetos

// arroja el valor TRUE o FLASE


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Forma tradicional
meses.forEach((mes) => {

    if(mes === 'Enero'){
        console.log('Enero si Existe');
    }
})


// ---------------- forma con array metodos --------------------------

// ARREGLOS     .includes('valor_a_buscar')

// Revisa si un valor existe entre de un Arreglo solo funciona con arrays
const resultado = meses.includes('Enero');
console.log(resultado);


// arreglo de OBJETOS       .some()

// Para que funcione con OBJETOS se hace con el mmetodo .some()

const existe = carrito.some(producto =>  producto.nombre === 'Celular');

console.log(existe);

const existe2 = meses.some((mes) => mes === 'Febrero');

console.log(existe2);