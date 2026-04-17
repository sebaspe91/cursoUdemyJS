// Ejemplo de o que es First Class Function

// Es agregarle un alias a una funcion 

const suma = function(a, b) {
    return a + b;
}

// se agrega la function
const aliasFunction = suma;

console.log(aliasFunction(10, 20));