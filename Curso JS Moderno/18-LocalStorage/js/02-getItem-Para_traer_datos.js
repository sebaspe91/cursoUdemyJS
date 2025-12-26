// obtener valores en localStorage
const valorLocal = localStorage.getItem('producto');
const nuevoValorLocal = JSON.parse(valorLocal); // Convertir denuevo a objetos o arrays
console.log(nuevoValorLocal)

// Esta forma sirve tanto para array como para objetos 

const meses = localStorage.getItem('meses');
const arrayMeses = JSON.parse(meses); // Convertir denuevo a objetos o arrays
console.log(arrayMeses)