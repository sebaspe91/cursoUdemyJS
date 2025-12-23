// metodos o funciones para los numeros

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;
const numero5 = 20;


// Para cambiar de un string a un numero Int
// con la clase Number.parseInt(variable);
console.log(Number.parseInt(numero1));

// Para pasar de un String a un flotante
console.log(Number.parseFloat(numero2));

// Los caracteres que no tengan numeros no se pudene cambiar 

// para evitar errores hay un metodo que REVISA si un nuemro es entero o no

console.log(Number.isInteger(numero4));
console.log(Number.isSafeInteger(numero5));