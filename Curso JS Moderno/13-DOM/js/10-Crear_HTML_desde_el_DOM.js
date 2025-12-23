// ------------------------- crear html desde js -------------------------------------------

//---------------------- creamos un nuevo elementos -------------------------

// ---------------------- a = a la etiqueta a de enlaces se pueden colocar en mayusculas o minusculas ---------------------

const enlace = document.createElement('a'); // metodo para crear una etiqueta HTML

// ------------------------------ como el enlace tiene un textro se le agrega el texto -----------------------
enlace.textContent = "Nuevo enlaces";

// ------------------------ se le agrega la ruta donde va dirigido el enlace ------------------------------
enlace.href = '/nuevo-enlace';

// ----------------------------- Se le puede agregar atributos segun sea necesario ------------------------

// le podemos agregar un atributo de target
enlace.target = '_blank';

// ------------------ Agregar un nuevo atributo ---------------------------------

// ------------- primer argumento es la clave ,      el segundo el valor  --------------------------------
enlace.setAttribute('data-enlace', 'nuevo-enlace');


// ------------------------ Para agregar clases al atributo ------------------------------
enlace.classList.add('alguna-clase');

// ---------------------------- podemos asignarle funciones con eventos "onclick" ----------------------------
enlace.onclick = miFuncion;



console.log(enlace);


// ------------------- Una vez creado el elemento toca ubicarlo en el DOM ---------------------------------------

// ------------------------------------- Seleccionamos el elemento padre donde va a ir el nuevo elemento ------------------------

const navegacion = document.querySelector('.navegacion');

// ******------------------ Agrgamos el nuevo elemento al DOM -----------------------******


// ----- Forma appendChild() ==> lo coloca al final --------
// navegacion.appendChild(enlace);

// ----------- Forma 2 ==> para ubicarlo en un lugar especifico -----------------------

// ---------------- miramos donde lo vamos a ubicar con un console.log --------------------

// console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[1]);

/* 

NOTA: 
    este elemento se inserta antes de el elemento que se indica como ubicacion

    Sintaxis
        etiquetaSeleccionada.insertBefore(etiqueta_nueva_a_insertar,       ubicacion_especifica_donde_insertarla);

*/

// la funcion del enlace de arriba miFUncion
function miFuncion(){
    alert('Diste Click');
}




// // Ejemplo 2

// // Crear un CARD de forma dinamica

// const parrafo1 = document.createElement('p');
// parrafo1.textContent = 'Concierto';
// parrafo1.classList.add('categoria', 'concierto');

// const parrafo2 = document.createElement('p');
// parrafo2.textContent = "Concierto de ROck";
// parrafo2.classList.add('titulo');

// const parrafo3 = document.createElement('p');
// parrafo3.textContent = "$800 por Persona";
// parrafo3.classList.add('precio');

// // Creamos un div con la clase de info
// const info = document.createElement('div');
// info.classList.add('info');

// // Agregamos los elementos
// info.appendChild(parrafo1);
// info.appendChild(parrafo2);
// info.appendChild(parrafo3);


// // Creamos la imagen
// const imagen = document.createElement('img');
// imagen.src = 'img/hacer2.jpg';
// // se le puede agregar clases boostrap
// imagen.classList.add('img-fluid');
// imagen.alt = 'Imagen de concierto';

// // Creamos el elemento padre que va contener la imagen y la info
// const card = document.createElement('div');
// card.classList.add('card');

// // Asignaer la imagen
// card.appendChild(imagen);
// // asignar la info
// card.appendChild(info);


// // Agregamos el elemento al DOM

// // se coloca acompañado de la clase hacer ya que contenedor-cards esta mas abajo solo que especificamos que debe de ser solo en esta seccion
// const contenedor = document.querySelector('.hacer .contenedor-cards');

// contenedor.insertBefore(card, contenedor.children[0]);

// // ver en consola
// console.log(contenedor);



// Creear un card

// contenedor principal
const card = document.createElement('div');
card.classList.add('card');

// imagen del card
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Imagen de concierto 2';
imagen.classList.add('img-fluid');

// div del texto
const divCard = document.createElement('div');
divCard.classList.add('info');

// textos dentro del divCard

const p_actividad = document.createElement('p');
p_actividad.textContent = 'Concierto 2';
p_actividad.classList.add('categoria', 'concierto');

const p_titulo = document.createElement('p');
p_titulo.textContent = 'Concierto de ROCK 2';
p_titulo.classList.add('titulo');

const p_precio = document.createElement('p');
p_precio.textContent = '$800 por Persona';
p_precio.classList.add('precio');

// insertamos los datos a las etiquetas

// texto en el div
divCard.appendChild(p_actividad);
divCard.appendChild(p_titulo);
divCard.appendChild(p_precio);


// div en el card
card.appendChild(imagen);
card.appendChild(divCard);

// seleccionamos el original 
const contenedorCard = document.querySelector('section.hacer .contenedor-cards');
contenedorCard.insertBefore(card, contenedorCard.children[0]);

console.log(contenedorCard);


