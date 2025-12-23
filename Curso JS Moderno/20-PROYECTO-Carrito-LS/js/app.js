// variables
const carrito = document.querySelector('#carrito');
// esta es el tbody para mostrar los cursos
const listaCarrito = document.querySelector('#lista-carrito tbody');
const listaCusrsos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];


llamarEventos();


function llamarEventos() {
    
    listaCusrsos.addEventListener('click', agregarCurso);
    
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        crearHTML();
    });

    // muestra los cursos de localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        crearHTML();
    });
}


// funciones

// agregar curso
function agregarCurso(e) {
    e.preventDefault();
    

    // condicion para especificar el boton que debe seleccionar
    if(e.target.classList.contains('agregar-carrito')){
        // console.log(e.target.parentElement.parentElement)
        
        // funcion que toma los datos del curso y los pasa a un objeto
        LeerDatosCurso(e.target.parentElement.parentElement);
    }
}


// Funcion que saca los datos especificos del curso y los procesa
function LeerDatosCurso(curso) {
    // Objeto que tiene la informacion del curso
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // variable que lleva el boolean
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    // condicion para aumentar la cantidad
    if(existe) {
        const curso = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad ++;
                return curso;
            } else {
                return curso;
            }
        });
        // se agregan en una lista
        articulosCarrito = [...curso];
    } else {
        // se agregan en una lista
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    
    // mostrar en la pagina web
    crearHTML();
    // console.log(articulosCarrito)
    
}

// funcion que muestra la informacion en la pagina web
function crearHTML() {
    // Limpuiar HTML
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <img src="${imagen}" width="100px">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;

        // insertamos el codigo en el html
        listaCarrito.appendChild(tr);
    });

    // sincronizar LocalStorage
    sincronizarStorage();
}

// sincronizar localStorage
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// limpiar el html
function limpiarHTML() {
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

// elimina un curso seleccionado
function eliminarCurso(e) {
    // console.log(e.target.classList.contains('borrar-curso'))
    if(e.target.classList.contains('borrar-curso')) {
        const id = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
        crearHTML();
    }
}