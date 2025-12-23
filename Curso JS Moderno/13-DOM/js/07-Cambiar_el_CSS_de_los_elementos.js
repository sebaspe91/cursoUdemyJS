// Cambiar el CSS de un elemento

//------ cambiar el color del encabezado ------------

const encabezado = document.querySelector('h1');
// encabezado.style.backgroundColor = 'red';

// ----------------------------------------------------

// --------------- cambiar la fuente ----------------------

// encabezado.style.fontFamily = 'Arial';

//  --------------------------------------------------------

// --------------------- cambiar el texto a MAYUSCULA --------------------

// encabezado.style.textTransform = 'uppercase';

// -------------------------------------------------------------------------

/* 

Para no colocar un codigo tan largo en JS es necesario quitar u agregar clases

La apariencia de la aplicacion o pagina web debe de ir en los archivos CSS para eso se puede agregar y quitar clases

*/

const card = document.querySelector('.card');

// Para agregar una nueva clase es
card.classList.add('nueva-clase');

// para eliminar una clase
card.classList.remove('card');


console.log(card.classList);

// console.log(encabezado);
