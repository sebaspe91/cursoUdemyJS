// obtener valores en localStorage
const valorLocal = localStorage.getItem('producto');
const nuevoValorLocal = JSON.parse(valorLocal);
console.log(nuevoValorLocal)

// Esta forma sirve tanto para array como para objetos 

const meses = localStorage.getItem('meses');
const arrayMeses = JSON.parse(meses);
console.log(arrayMeses)