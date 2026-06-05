
// Partials y Currying

// Currying
    // Es dividir una funcion que toma mas de un parametro en argumentos de forma parcial


// SINTAXIS

// Dividir la funcion en 2 parte
const suma = (a,b,c) => a + b + c;

const parcial = a => (b,c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado = primerNumero(4,3);

console.log(resultado);


// Dividir la funcion en 3 partes
const parcial2 = a => b => c => suma(a,b,c);

const resultado2 = parcial2(5)(4)(3);

console.log(resultado2);