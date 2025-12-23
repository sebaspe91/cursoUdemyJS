// .concat();

// Sirve para unir dos arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto','Septiembre'];
const meses3 = ['Octubre','Noviembre', 'Diciembre'];

const resultado = meses.concat(meses2, meses3, 'otro mes');

console.log(resultado);


// spred operator
const resultado2 = [...meses, ...meses2,...meses3, 'Otro mes2'];

// puede agregar cadenas de texto pero no debe de llevar los ... ya que esto coloca cada caracter en una posicion del arreglo


console.log(resultado2);