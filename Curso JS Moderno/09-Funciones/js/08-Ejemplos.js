

function sumar(a, b){
    return a + b;
}

const resultado = sumar(2,3);

console.log(resultado);


// Ejemplo mas avanzado

let total = 0;
function agregarCarritos(precio) {
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarritos(300);
total = agregarCarritos(100);
total = agregarCarritos(600);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de $${totalPagar}`);

console.log(total);