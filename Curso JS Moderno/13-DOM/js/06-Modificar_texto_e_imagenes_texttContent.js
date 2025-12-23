// Modificar elementos con js

const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado);

/* 
si en el CSS la etiqueta tiene el estilo de "-visibility-hidden" ==> vuelve invisible el html ===> este metodo no lo va encontrar

    No en cuentra los elementos que esten con CSS: visibility: hidden
 
*/
// console.log(encabezado.innerText); 

 // si encuentra todos los elementos no importa su propiedad hasta los que esten ocultos
// console.log(encabezado.textContent);

// Trae el texto con las etiquetas de HTML que la comprende, en si trae toda la estructura HTML
// console.log(encabezado.innerHTML); 


// Para modificar el texto se puede hace asi
// document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

// Para acceder a una imagen y cambiarla
const imagen = document.querySelector('.card img');

// toma la propiedad .src para cambiar la imagen
imagen.src = 'img/hacer2.jpg';

document.querySelector('.contenedor-cards .card .info .titulo').textContent = 'HOLA MUNDO';