
// NOTA: Losarreglos a si esten con const se pueden modificar

const meses = ['Enenero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Modificar el valor de los arreglos
meses[0] = 'Nuevo Mes';

// Agregar un nuevo valor
meses[10] = 'Ultimo Mes';

console.table(meses);