// Comparar Estricto

const puntaje = 1000;

if(puntaje == 1000) {
    console.log('Si es igual a 1000');
} else {
    console.log('No es igual');
}

// Forma estricta con === verifica el tipo de dato
if(puntaje === "1000") {
    console.log('Si es igual a 1000');
} else {
    console.log('No es igual');
}


// Forma estricta con !== verifica el tipo de dato
if(puntaje !== "1000") {
    console.log('Es diferente tipo');
} else {
    console.log('es igual');
}