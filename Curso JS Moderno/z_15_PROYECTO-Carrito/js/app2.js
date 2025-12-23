
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

// llamar eventos
cargarEventListeners();

function cargarEventListeners() {

    // agregar cursos
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar un curso
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
    // console.log(listaCursos)
}


// agregar curso
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        
        const curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso);

    }
    
} 

// leer el curso 
function leerDatosCurso(curso) {

    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // validamos si existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        const cursoTratado = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad ++;
                return curso;
            } else {
                return curso;
            }
        });

        // actualizamos el array
        articulosCarrito = [...cursoTratado];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    // console.log(articulosCarrito)

    // pintamos el HTML
    carritoHTML();
}
 

// imprimimos el HTML
function carritoHTML() {

    limpiarHTML()

    articulosCarrito.forEach(curso => {
        
        const {imagen, titulo, precio, cantidad, id} = curso;

        // creamos un elemento
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;

        contenedorCarrito.appendChild(row);
    });
}

// eliminar un curso
function eliminarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        const id = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
        
        // console.log(articulosCarrito)
        carritoHTML();
    }
    
}

// limpiar el HTML
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}