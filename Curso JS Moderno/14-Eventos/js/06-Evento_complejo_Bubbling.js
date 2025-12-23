// Event Bubbling

// Los eventos se propagan como si fuera una burbuja, esto quiere decir que el evento se puede ejecutar en varias parte de nuestro codigo dando resultado inesperados

// Event Bubbling = Evento burbuja ==> es cuando una etiqueta esta dentro de otra etiqueta y cada una de esas etiquetas tenga un evento asignado adarle click se ejecutan todos los eventos tanto de la etiqueta hija como la del padre

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// En este ejemplo podemos ver que card es padre de info y de titulo y si le da click en card en la imagen ps no pasa nada va mostrar el mensaje de click en card, pero si le damos click en la seccion de info va a mostrar los dos mensaje del padre que es (click en card) y de la ejecucion que es (click en info), eso se conoce como Bubling....

// Para evitar esto se hace con .stopPropagation()

cardDiv.addEventListener('click', (evento) => {
    evento.stopPropagation();
    console.log('click en Card');
});

infoDiv.addEventListener('click', (evento) => {
    evento.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', (evento) => {
    evento.stopPropagation();
    console.log('click en titulo');
});

// 