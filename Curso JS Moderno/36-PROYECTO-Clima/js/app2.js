

const container = document.querySelector('.container');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', obtenerClima);

// funciones
function obtenerClima(e) {
    e.preventDefault();

    // validamos datos
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        imprimirAlerta('Todos los campos son obligatorios');
        return;
    }

    // llamar la api
    consultarAPI(ciudad, pais);
}

// imprimir alerta
function imprimirAlerta(mensaje) {

    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        
        const mensajeDiv = document.createElement('p');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.classList.add('text-center', 'py-3', 'px-4', 'text-red-700', 'bg-red-100', 'border-red-400', 'rounded', 'mt-6', 'max-w-md', 'mx-auto');

        container.appendChild(mensajeDiv);

        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }

}

// consumir api
function consultarAPI(ciudad, pais) {
    const apiId = '9f15ec261885a7898acec1749453c897';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

    spinner();
    limpiarHTML();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {

            // validar si la ciudad existe
            if (datos.cod === 200) {
                
                imprimirHTML(datos)
            } else {
                imprimirAlerta(`La ciudad ${ciudad} no fue encontrada con el pais seleccionado`);
            }
        })
        .catch(error => console.log(error));
}

// mostrar la consulta en el html
function imprimirHTML(datos) {
    // sacar los datos del objeto
    const {name, main:{temp, temp_max, temp_min}} = datos;

    // tratamos los datos para que pasen de kelvin a centigrados
    const tempActual = kelvinACentigrados(temp);
    const tempMax = kelvinACentigrados(temp_max);
    const tempMin = kelvinACentigrados(temp_min);

    // creamos el html
    const card = document.createElement('div');
    card.classList.add('text-center', 'text-white');

    const nameText = document.createElement('p');
    nameText.textContent = `El climan en ${name}`;
    nameText.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${tempActual} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const max = document.createElement('p');
    max.innerHTML = `Max: ${tempMax} &#8451;`;
    max.classList.add('text-xl');

    const min = document.createElement('p');
    min.innerHTML = `Min: ${tempMin} &#8451;`;
    min.classList.add('text-xl');

    card.appendChild(nameText);
    card.appendChild(actual);
    card.appendChild(max);
    card.appendChild(min);

    // incorpiorar en el DOM
    resultado.appendChild(card);

}

// funcion que convierte de kelvin a centigrados
const kelvinACentigrados = grados => parseInt(grados - 273.15);

// limpiar html
function limpiarHTML() {
    while ( resultado.firstChild ) {
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner() {
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
}