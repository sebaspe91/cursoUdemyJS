// Como eliminar elementos al localStorage
localStorage.removeItem('llave');

// actualizar un registro en localStorage

// se toma el valor de localStorage y lo actualiza 
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)

// actualizamos el valor
mesesArray.push('Nuevo Mes');
console.log(mesesArray)

// se agrega el registro actualizado con el mismo nombre de la llave que lo tenia guardado
localStorage.setItem('meses', mesesArray);

// para eliminar todo lo de localStorage 

// localStorage.clear();