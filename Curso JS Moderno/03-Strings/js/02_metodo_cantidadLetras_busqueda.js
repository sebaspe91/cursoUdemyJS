// Metodos para los String o cadenas de texto


const producto = 'Monitor 20 pulgadas';

// imprime la variable
console.log(producto);

// para saber cuantos caracteres tiene la cadena
console.log(producto.length);


// Para realizar una busqueda se puede hacer con indexOF
// Cuando se requiera realizar una busqueda por determinado elemento o caracteristica se hace con indexOf realiza el la busqueda con solo un caracter y este toma solo el index donde esta ubicado

// console.log(producto.indexOf('s'));

// realiza una busqueda de una cadena de texto dentro de otra cadena de texto devuelve como resultado el true o false
console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));