// Agregar elementos

const meses = ['Enenero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Acceder a todos los elementos de un array

// cuanto miede el arreglo
console.log(meses.length);

// recorrer un arreglo
// for(let i = 0; i < meses.length; i++){
//     console.log(meses[i]);
// }

meses.forEach(valor => {
    console.log(valor);
});