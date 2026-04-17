
const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;


// creamosuna funcion para utilizar las dos funciones de arriba
const sumarOMultiplicar = fn => fn(10, 20);


// pasamos la funcion como argumenta la cual sera el fn()
console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));