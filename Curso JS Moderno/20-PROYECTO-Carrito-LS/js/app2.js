
// elementos html
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

// llamar eventos
llamarEventos();

function llamarEventos() {

        // mostrar lo de localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('cursoX')) || [];
        crearHTML();
    });

    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        crearHTML();
    });


}


// FUNCIONES

// Agregar curso
function agregarCurso(e) {
    e.preventDefault();

    
    if (e.target.classList.contains('agregar-carrito')) {


        LeerDatosCurso(e.target.parentElement.parentElement);
    }
    
}

// leer datos del curso
function LeerDatosCurso(curso) {
    
    const infoCurso = {
        titulo : curso.querySelector('h4').textContent,
        imagen : curso.querySelector('img').src,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a ').getAttribute('data-id'),
        cantidad : 1
    }

    // agregamos el curso a la lista

    // verificamos si esxiste
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        const cursoNuevo = articulosCarrito.map(curso => {
            if (infoCurso.id === curso.id) {
                curso.cantidad ++;
                return curso;
            }
            return curso;
        });

        // actualizamos la copia
        articulosCarrito = [...cursoNuevo]
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    // mostrar en html
    crearHTML();

    // console.log(articulosCarrito)
}

// crear html
function crearHTML() {

    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const {titulo, imagen, precio, id, cantidad} = curso;
        
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td><img src="${imagen}" width="100px"></td>
            <td>${titulo}</td>        
            <td>${precio}</td>        
            <td>${cantidad}</td> 
            <dt><a href="#" class="borrar-curso" data-id="${id}">X</a></dt>       
        `;

        listaCarrito.appendChild(tr);
        

        // console.log(cantidad)
    });

    // sincronizar localStorage
    localStorage.setItem('cursoX', JSON.stringify(articulosCarrito));

}

// limpiar el HTMl
function limpiarHTML() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

function eliminarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        const id = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
    }

    crearHTML();
    
}