
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

// donde va los cursos
let articulosCarrito = [];

// llamar todos los eventos

cargarEventListeners();

function cargarEventListeners(){
    // agregar el curso al carrito
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar un curso del carrit
    carrito.addEventListener('click', eliminarCurso);

    // boton vacias carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML(); 
    });

}

// agregamos el curso 
function agregarCurso(e) {

    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {

        const cursoSeleccionado = e.target.parentElement.parentElement;
        
        leerDatosCurso(cursoSeleccionado);
    }    

}

// eliminamos los cursos
function eliminarCurso(e) {

    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {

        const id = e.target.getAttribute('data-id');

        // filtramos los datos
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
       
        // pintams otra vez el carrito en el html con el array actualizado
        carritoHTML();
    }
    
}

// lee los datos enviados de agregar curso
function leerDatosCurso(curso) {
    
    // sacamos los valores del curso en un Objeto
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // buscamos si en la lista del curso existe el id para sumar solo agregar
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        // recorre y crea una copia con los datos de la lista global
        const curso = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad ++;
                return curso;
            } else {
                return curso;
            }
        });

        // se agrega el curso a la lista global del carrito con las modificaciones
        articulosCarrito = [...curso];  // rempla el array antiguo por el nuevo
    } else {
        // si no hay se agrega el objeto con los datos a la lista global del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    
    // mostrar la lista en el HTML
    carritoHTML();
    
}

// mostrar el curos en el carrito HTML
function carritoHTML() {

    // recetea el contenido de carrito
    limpiarHTML();

    articulosCarrito.forEach(curso => {

        // sacamos los valores del articuloCarritos
        const {imagen, titulo, precio, id, cantidad} = curso;

        // creamos un elemento html para estructura dentro del carrito
        const row = document.createElement('tr');

        // creamos la estructura html q se va mostrar 
        row.innerHTML = `
        
            <td> 
                <img src="${imagen}" width="100"> 
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

        contenedorCarrito.appendChild(row);

    });
}


// limar HTML
function limpiarHTML() {

    // mientras tenga un nodo hijo se ejecutara y llamara el primer nodo que tenga hasta limpiar todo los datos
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    
}