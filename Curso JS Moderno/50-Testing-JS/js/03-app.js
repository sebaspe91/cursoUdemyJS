
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// se crea un promise para que retorne o no deje ejecutar la validacion
async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b));
}

// Funcion de test
async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El Test: ${mensaje} se ejecuto correctamente`);
    } catch (error) {
        console.error('Error:');
        console.error(error);
    }
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

// UTILIZAR LOS TEST:

let resultado = suma(1, 2);
let valorEsperado = 3; // es el valor esperado de la funcion, esto es un testing manual
expected(resultado).toBe(valorEsperado);
expected(resultado).toEqual(valorEsperado);

test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10, 20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
});

let resultadoResta = restar(1, 2);
let valorEsperadoResta = 3;
expected(resultadoResta).toBe(valorEsperadoResta);
expected(resultadoResta).toEqual(valorEsperadoResta);