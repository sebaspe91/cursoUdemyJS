
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// validaro de testing
function expected(valorEsperado) {
    return { // entrega un objeto
        toBe(resultado) {
            if (resultado !== valorEsperado) {
                console.error(`El ${resultado} es diferente a lo esperados; La prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }
        },
        toEqual(resultado) {
            if (resultado !== valorEsperado) {
                console.error(`El ${resultado} no es igual a lo esperados; La prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }         
        }
    }

}

let resultado = suma(1, 2);
let valorEsperado = 3; // es el valor esperado de la funcion, esto es un testing manual
expected(resultado).toBe(valorEsperado);
expected(resultado).toEqual(valorEsperado);

let resultadoResta = restar(1, 2);
let valorEsperadoResta = 3;
expected(resultadoResta).toBe(valorEsperadoResta);
expected(resultadoResta).toEqual(valorEsperadoResta);