// Eventos: MAUSE

const nav = document.querySelector('.navegacion');

// registrar un evento

// click, acciona cuando se suelta el click
nav.addEventListener('click', () => {
    console.log('click en el nav');
})

// mosuedown
// es muy similar al evento click. Solo que este acciona cuando preciono el click
nav.addEventListener('mousedown', () => {
    console.log('mosuedoun en el nav');
})

// mouseup
// es lo mismo que el click se acciona cuando suelta el click del mouse
nav.addEventListener('mouseup', () => {
    console.log('Es lo mismo que click se activa cuando seuelta el click');
})

// dblclick
// Es un evento doble click
nav.addEventListener('dblclick', () => {
    console.log('doble click');
})


// mouseenter
// es como un hover cuando ingresa en el area seleccionado
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'transparent';
})

// mouseout
// es cuando dejas de estar sobre el elemento seleccionado
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'white';
})