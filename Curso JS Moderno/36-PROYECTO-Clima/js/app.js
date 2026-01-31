
// traemos los elementos
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const container  = document.querySelector('.container ');

// const climaBtn = document.querySelector('input[type="submit"]');

formulario.addEventListener('submit', buscarClima);


// Funciones
function buscarClima(e) {
    e.preventDefault();

    const ciudadInput = document.querySelector('#ciudad').value;
    const paisInput = document.querySelector('#pais').value;

    // validar elementos 
    if( ciudadInput === "" || paisInput === "" ) {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    Spinner();
   
    // consulta la API
    setTimeout(() => {
        consultarAPI(ciudadInput, paisInput);
    },5000);
    
}

function mostrarError(mensaje) {

    // validar que solo arroje un solo mensjae
    const alerta = document.querySelector('.bg-red-100');
    if (!alerta) {
         const mensajeError = document.createElement('div');
        mensajeError.textContent = mensaje;
        mensajeError.classList.add('py-3', 'px-4', 'text-center', 'bg-red-100', 'border-red-400', 'text-red-700', 'rounded', 'max-w-md', 'mx-auto', 'mt-6');
        
        container.appendChild(mensajeError);

        setTimeout(() => {
            mensajeError.remove();
        }, 3000);
    }
   
}

// consultar api
function consultarAPI(ciudad, pais) {
    // se agrega el id pro que lo navegadores los requieren para saber que apis se consumen mas y a si cobrar
    const appId = '9f15ec261885a7898acec1749453c897';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            // limpaimso el html
            limpiarHTML();
           

            // validar si la ciudad es correcta
            if (datos.cod === 200) {
                mostrarHTML(datos);
            } else {
                mostrarError(`No existe la ciudad ${ciudad} en el pais seleccionado`);
            }
        })
        .catch(error => console.log(error));

}

// mostrar los datos de la api
function mostrarHTML(datos) {

    // console.log(datos.main.temp);

    // sacmos los datos

    /**
     * const { main: {temp, temp_max, temp_min} } = datos
     * 
     * En este concepto nos enseña sacar dentro de un objeto los valores de otro objeto
     */
    const { name, main: {temp, temp_max, temp_min} } = datos

    // pasar de kelvin a centigrados
    const tempCentigrados = kelvinACentigrados(temp);
    const temp_maxCentigrados = kelvinACentigrados(temp_max);
    const temp_minCentigrados = kelvinACentigrados(temp_min);

    // creamos el html

    const ciudad = document.createElement('p');
    ciudad.textContent =`Clima en ${name}`;
    ciudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${tempCentigrados} &#8451;`;
    actual.classList.add('fond-bold', 'text-6xl');

    const max = document.createElement('p');
    max.innerHTML = `Max: ${temp_maxCentigrados} &#8451;`;
    max.classList.add('text-xl');

    const min = document.createElement('p');
    min.innerHTML = `Min: ${temp_minCentigrados} &#8451;`;
    min.classList.add('text-xl');

    // creamos el contenedor 
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');

    resultadoDiv.appendChild(ciudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(max);
    resultadoDiv.appendChild(min);

    resultado.appendChild(resultadoDiv);

   
}

// convierte de kelvin a centigrados      =====> esto es una funcion tipo array funtion mas simple
const kelvinACentigrados = grados  => parseInt(grados - 273.15); 

// borrar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// creamos el spinner
function Spinner() {
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>    
    `;

    const spinner = document.querySelector('#spinner');
    spinner.appendChild(divSpinner);

    setTimeout(() => {
        divSpinner.remove();
    }, 5000);
}

/**
 * NOTA:
 * 
 * Para usar la appi https://openweathermap.org/
 * 
 * se debe de registar en la pagina 
 * 
 *  Lorenateamo-2             sebaspegu91@hotmail.com
 * 
 * Cuando inicie sesion ingresa a la pestaña api_keys
 *      crea la llaves 
 *      copia la llave 
 *      pega el id de la llave en la variable appId = ""
 *      
 *      Cuando se consume la appi se debe de tener en cuenta como la solucita la pagina para eso debe de mirar la documentacion de la pagina web donde va consumir la appi
 *          en este caso va a la pagina y mira 
 * 
 */