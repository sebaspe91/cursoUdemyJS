// Event loop o Loop de eventos en JS

// Modelo de concurrecia y Loop de eventos

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
},0);

console.log('Tercero');

new Promise(function(resolve) {
    resolve('Desconocido...')
}).then(console.log)

setTimeout(() => {
    console.log('Cuarto');
},0);

console.log('Ultimo');


// JS, ejecuta todo de forma de monolitica o sea todo cumple por me dio de una orden que tenga mas peso va primero las variables, despues las funciones y a si susesivamente y se ejecuta primero el Stack y luego el Queue

// Stack = es la pila ===> tiene privilegios es premium

// Queue = es la cola