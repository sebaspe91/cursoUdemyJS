// variables

// const por que si son id son unicos
// #carrito es todo div donde esta el carrito de compras
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCusrsos = document.querySelector('#lista-cursos');

// creamos el arreglo que tiene el carrito de compras
let articulosCarrito = [];


// crear los listener

// cramos una funcion donde se registran todos los eventos
cargarEventListeners();

function cargarEventListeners(){

    // cuando agregas un curso presionando "Agregar al Carrito"
    listaCusrsos.addEventListener('click', agregarCurso);


    // Eliminas cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {

        // se vacia el arreglo
        articulosCarrito = [];
        // se limpia en el HTML los cursos
        limpiarHTML();
    })
}

// Funciones
function agregarCurso(e){

    // evita q el enlace se cumpla a si evitamos a q la pagina vuelva al inicio
    e.preventDefault();

    // se coloca esta opcion para ver que estamos oprimiendo para especificar que boton queremos oprimir
    // console.log(e.target.classList);

    // condicion para saber que queremos oprimir
    if(e.target.classList.contains('agregar-carrito')){

        // variable que toma el curso seleccionado
        const cursoSeleccionado = e.target.parentElement.parentElement;
        // console.log(e.target.parentElement.children[0].textContent);

        // la pasamos a la funcion
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina un Curso del Carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')){

        // creamos una variable que contenga el id del curso
        const cursoId = e.target.getAttribute('data-id');

        // Eliminar curso del arreglo articulosCarrito por el data-id
        // se hace con !== ya que se traiga todos los articulos excepto el que estamos eliminando
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        // llamamos de nuevo la funcion que pinta en el HTML
        carritoHTML();
    }
}

// lee el contenido del HTML al que le dimos click y extraer la informacion del curso

function leerDatosCurso(curso) {
    // console.log(curso);

    // Creamos un objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        // id del curso esta en la equita enlace a como un atributo
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // Codigo para aumentar la CANTIDAD de los ARTICULOS

    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if(existe){
        // Actualizamos  la cantidad
        const curso = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad ++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna el objeto q no son duplicados
            }
        });

        // tomamos una copia de los cursos y la agregamos a la lista global 
        articulosCarrito = [...curso]; // remplaza el array antiguo con el nuevo

    } else {
        // Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    
    // console.log(articulosCarrito);
    carritoHTML();
}



// muestra el carrito de compras en el HTML
function carritoHTML() {

    // limpiar el HTML para que se le pueda aumentar la cantidad de los articulos o cursos cuando se repitan
    limpiarHTML();

    // recorre el carrito y genera el HTML
    articulosCarrito.forEach( (curso) => {
        
        // Sacamos los valores del objeto
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `

            <td>
                <img src ="${imagen}" width ="100">
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
                <a href="#" class="borrar-curso" data-id=${id}> X </a>
            </td>
        
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    } )
}


// Elimina los cursos del tbody para poder volver agregar los elementos
function limpiarHTML() {
    // esta es la fomra lenta de eliminar HTML
    // contenedorCarrito.innerHTML = '';

    // Forma rapida de Eliminar HTML

    // con firstChild: se ejecuanto cuando por lo menos tenga un elemento adentro, cuando el codigo es limpiado ya no se ejecuta
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    // .firstChild ====> devuelve el primer nodo hijo de un elemento (etiqueta HTML)
}
