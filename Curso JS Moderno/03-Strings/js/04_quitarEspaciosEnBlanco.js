const producto = '         Monitor 20 pulgadas     ';

console.log(producto);
console.log(producto.length);

// Metodo para eliminar espacio en blacos

// Esto se usa cuando los usuarios van a gregar un correo y para pasar la validaciom van a gregar espacios al inicio o final con este metodo solo tomamos el correo de la base de datos o ingresamos solo el correo si es el caso de registros

// espacio Inicio
console.log(producto.trimStart());
// espacio Final
console.log(producto.trimEnd());
// espacio Inicio y Final
console.log(producto.trimStart().trimEnd());

// tambien puede usar el trim solo para elimanar ambos espacios