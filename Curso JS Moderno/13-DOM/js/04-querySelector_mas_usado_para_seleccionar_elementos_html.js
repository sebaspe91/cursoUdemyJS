// quuerySelector

// Selector mas usuado

// sirve para seleccionar #id o .clases

// seleccionar un elemento que contenga la clase .card
const card = document.querySelector('.card');
console.log(card);

// se pueden crear selectores especificos que contienen mas de dos clases

// cuando no llevan espacio queiere decir que estan en el mismo nivel
// const info = document.querySelector('.premium.info');               ===> busca el elemento que tenga esas dos clases

// cuando el selector es hijo lleva un espacio entre los argumentos enviados al metodo querySelector(.Padre    .Hijo);
info = document.querySelector('.premium .info');

console.log(info);

// para seleccionar el segundo elemento que contega el mismo nombre de la clase que esta dentro de otra clase

/**
 * section.hospedaje ===> toma las etiquetas <section> y busca que tenga la clase .hospedaje
 * 
 * .card:nth-child(2)  ====> de la clase .card cuando trae varios elementos selecciona el segundo 
 */

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

// Seleccionar el Formulario con ID
const formulario = document.querySelector('#formulario');

console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);