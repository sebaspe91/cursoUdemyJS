// Prevenir el event Bubbling con Delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    // con e.target identificamos a q le estamos dando click
    // console.log(e.target);

    // con e.target.classList para ver las clases de los elementos
    // console.log(e.target.classList);

    // Con esto se puede hacer una condicion 
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }
    if(e.target.classList.contains('card')){
        console.log('Diste click en card');
    }
});