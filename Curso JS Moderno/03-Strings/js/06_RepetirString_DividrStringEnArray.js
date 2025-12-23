// Repit y Split

const producto = 'Monitor 20 pulgadas';

// EL repit repite n veces el texto o cadena 
// sintaxis: .repeat(n)
const texto = ' en Promoción'.repeat(3);
console.log(texto);

// forma nueva 
// podemos observar q producto solo se repite una vez y el texto se repite las tres veces
console.log(`${producto} ${texto} !!!`);




// split:    permite dividir un string

// cuando se coloque el split("Se pasa que parte del texto va buscar del string para dividirlo")

const actividad  = "Estoy aprendido JavaScript Moderno";

console.log(actividad.split(" ")); // En este punto se divide por cada espacio

// Si necesitamos un listado de categorias con resetas determinadas se puede utilizar esta tecnica

const hobbies = "Leer, caminar, escuchar, misica, escribirm aprender a progamar";

console.log(hobbies.split(", "));