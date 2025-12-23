// Traversing the DOM

// Esto es la forma como moverse en los documentos de HTML y CSS

// Es como ir a una ciudad que uno no conoce y la vamos recorriendo por los lugares que son de mi interes

const navegacion = document.querySelector('.navegacion');

// ----------- para seleccionar el primer elemento -------------
// console.log(navegacion.firstElementChild);

// -------------------- ultimo elemento ------------------
// console.log(navegacion.lastElementChild);

/* ---------------------------------------------------------

 Para acceder a cada uno de los elementos de navegacion o mas conocidos como los enlaces que son las etiquetas <a>
 Se utilizan los metodos de .childNodes y .children
 La diferencia entre ellos es que childNode lista todos los elementos hasta los espacion como text y children lista solamente las etiquetas que buscamos que son las <a>

*/ // ------------------------------------------------------- 

// ----------- Lista o muestra todos los elementos, hasta los espacios que se muestran en el codigo los saltos de linea de HTML -------
// console.log(navegacion.childNodes);

// --------- lista solamente las etiquetas de HTML ------------
// console.log(navegacion.children);

// ---------- Podemos ingresar mas adentro como si fuera un arreglo -------------

console.log(navegacion.children[0]);

/* ------------------------------------------------------------------------------------------------------------------------------------

Como tienen un elemento interno tambien podemos interactuar con ellos se puede buscar en la pagina de moxzilla dandole click a la etiqueta en la consola

-------------------------------------------------------------------------------------------------------------------------------------- */

// ----------------------------- Para conocer el el nombre de la etiqueta  ----------------------------------------------------
// console.log(navegacion.children[1].nodeName);

// -------------------- Para conocer el tipo del elemento ----------------------------------------------------------------------
// console.log(navegacion.children[1].nodeType);

// ----------------------- Nota ver la documentacion del navegador de fireFox aparece como developer.mozilla.org/es/docs/api... ---------------

const card = document.querySelector('.card');

// -------------- Esto hace para llegar a los hijos asta llegar al elemento que desea cambiar ---------------------------
// card.children[1].children[1].textContent = 'Hola Mundo Soy sebastian';


// console.log(card.children[1].children[1].textContent);

// ------------------- Practica --------------------------------------------

// ---------- Cambiar una imagen --------------------

// imagen = card.children[0];
// console.log(imagen.src);

// imagen.src = 'img/hacer2.jpg';
// card.children[0].src = 'img/hacer1.jpg';
// console.log(card.children[0].src);



// ---------------------- Para hallar el padre de una etiqueta seleccionada ----------------------------

// console.log(card.parentNode);

// ------------------------- Pero es mejor utilizarlo con parentElement ------------------------------------

// console.log(card.parentElement.parentElement);




// ------------------------------ Seleccionar el siguiente elemento ELEMENTOS HERMANOS ----------------------------

console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// ---------------------------------- Ultimo Card --------------------------------------------------------

const ultimoCard = document.querySelector('.card:nth-child(4)');

// --------------------- se regresa al elemento hermano anterior -------------------------
console.log(ultimoCard.previousElementSibling);
