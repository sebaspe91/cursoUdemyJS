// funciones puras o Pure Functions

// Se utilizan mucho en Reack


/** CARACTERISTICAS 
 * 
 * Una funcion pura es que retornan un dato pero no modifican los valores de las variables globales
 * 
 * Con una entrada de datos "Parametros" deben de retornar la misma cantidad de datos que reciben
 */


// Ejemplo

// recibe un parametro devuelve un valor
const duplicar = numero => numero *2;

// No se puede duplicar o modificar la variable global
const numero1 = 20;
const resultado = duplicar(numero1);
console.log(resultado);