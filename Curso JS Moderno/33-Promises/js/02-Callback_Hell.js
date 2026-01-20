// Mal uso

/**
 * Es cuando los elementos o estructura del codigo tienen bastantes hijos y la curba coje hacia dentro
 * 
 * --------------
 *   ----------------
 *     -----------------
 *       ------------------
 *     -----------------
 *   ----------------
 * --------------
 */

const paises = [];


function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}


function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
        }, 3000);
    }, 3000);
}


iniciarCallbackHell();