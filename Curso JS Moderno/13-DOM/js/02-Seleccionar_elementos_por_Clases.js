// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');

console.log(header);

// Si la clase existe mas de una vez trae a todos los elementos que utilicen esa clase
const contenedores = document.getElementsByClassName('contenedor');

console.log(contenedores);

// si la clase no existe 
const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste);