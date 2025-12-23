// Operador Ternario

// Es como un if pero en una sola linea

const autenticado = true;
const puedePagar = false;


let resultado = autenticado ? `Esta autenticado` : `No esta autenticado`;
console.log(resultado);

/* SINTAXIS

    varieble = valor_condicion ? true : false;
*/

// condicion con &&
// console.log(autenticado && puedePagar ? "Esta autenticado" : "No esta autenticado");

// IF anidado
console.log(autenticado ? puedePagar ? "Esta autenticado y puede pagar" : "Si autenticado, No puede pagar" : "No esta autenticado");

/* SINTAXIS IF anidado

        variable = condicon_1 ? condicion_2_true ? true_condicion_2 : false_condicion_2 : false_condicion_1;

*/