

// selectores
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');


// para paginacion se crea una variable que va traer 40 registros por pagina
const resgistroPorPagina = 40; // total de elementos que va tener la pagina
let totalPaginas; // va tomar el total de las paginas
let iterador; // toma el valor de yield 
let paginaActual = 1; // por defecto cuando se uinicia siempre se va llamar la pagina 1

// cuando carga la pagina se ejecuta este codigo 
window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

// crear funciones

// validar formulario
function validarFormulario(e) {
    e.preventDefault();

    const termino = document.querySelector('#termino').value;

    // validar campo
    if (termino === '') {
        mostrarAlerta('Agrega un termino de busqueda');
        return;
    }

    // consumo de api
    consultarAPI();    
}

// consultar la api
function consultarAPI() {
    const termino = document.querySelector('#termino').value;
    const idApi = '54519434-417230bd7d9afdb8d3fe4b4dd';
    const url = `https://pixabay.com/api/?key=${idApi}&q=${termino}&per_page=${resgistroPorPagina}&page=${paginaActual}`; // per_page=100 ===> que traga 100 imgaen por consulta

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            // validar si encontro 
            if (datos.total == 0) {
                mostrarAlerta(`No se encontro imagenes con la palabra ${termino}`);
                return;
            }
            // para paginacion
            totalPaginas = calcularPaginas(datos.totalHits); // se toma el total de las paginas
            imprimirDatos(datos.hits);
        })
        .catch(error => console.log(error));
}


// mostrar alerta
function mostrarAlerta(mensaje) {

    const existe = document.querySelector('.bg-red-100');

    if (!existe) {
        const alerta = document.createElement('P');
        alerta.classList.add('px-4', 'py-3', 'text-center', 'mt-6', 'bg-red-100', 'border-red-400', 'text-red-700', 'text-bold', 'rounded', 'mx-auto','max-w-lg');

        alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        // agregar al dom
        formulario.appendChild(alerta);

        // eliminar la alerta
        setTimeout(() => {
            alerta.remove();
        },3000);
    }


}

// PAGINACION

// Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total) {

    // con un for 
    for (let i = 1; i <= total; i++) {
        yield i;  // registra ese valor
    }
}

// calucular el numero de pagina
const calcularPaginas = total => parseInt(Math.ceil(total/resgistroPorPagina));



// mostrar los datos
function imprimirDatos(fotos) {

    // limpiar html
    limpiarHTML(resultado);

    fotos.forEach(fotos => {
        const {id, likes, largeImageURL, previewURL, views, user} = fotos;

        // cards
        const cardDiv = document.createElement('DIV');
        cardDiv.classList.add( 'w-1/2', 'md:w-1/3', 'lg:w-1/4', 'p-3', 'mb-4');
        cardDiv.dataset.id = id;

        // enlace
        const enlace = document.createElement('A');
        enlace.href = largeImageURL;
        enlace.target = '__blank';
        enlace.rel = 'noopener noreferrer'; // es para mejorar la seguridad

        // imagen
        const imagen = document.createElement('IMG');
        imagen.src = previewURL;
        imagen.alt = user;
        imagen.classList.add('w-full');

        // body del card
        const cardBody = document.createElement('DIV');
        cardBody.classList.add('bg-white', 'text-center', 'text-black-700', 'mb-4');

        // links
        const links = document.createElement('P');
        links.classList.add('font-bold');
        links.innerHTML = `${likes} <span class="font-light">Me gusta</span>`;

        // links
        const viewsText = document.createElement('P');
        viewsText.classList.add('font-bold');
        viewsText.innerHTML = `${views} <span class="font-light">Vistas</span>`;

        // incoporar en el dom

        // enlace e imiagen
        enlace.appendChild(imagen);

        // cardBody
        cardBody.appendChild(enlace);
        cardBody.appendChild(links);
        cardBody.appendChild(viewsText);

        cardDiv.appendChild(cardBody);


        // a resultados
        resultado.appendChild(cardDiv);

    });

    
    // limpiar html
    limpiarHTML(paginacionDiv);

    // Mostrar La PAGINACION
    imprimirPaginador();
    
    
}


// imprimimos el iterador
function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);

    // va registrar todoso los valores de yield
    while (true) {
        const {value, done} = iterador.next(); // value ===> son los registro del yield ;;; y   done ====> es si termino de ver los registros
        if (done) return; //  Esto quiere decir que si ya llegamos al final no se ejecute nada

        // caso de que aun tenga registro, genera un boton por cada elemento 
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-5', 'rounded');

        // navegar por la paginacion
        boton.onclick = () => {
            paginaActual = value;

            // consula de nuevo la api
            consultarAPI();
        }

        paginacionDiv.appendChild(boton);
    }
}

// limipar html
function limpiarHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}