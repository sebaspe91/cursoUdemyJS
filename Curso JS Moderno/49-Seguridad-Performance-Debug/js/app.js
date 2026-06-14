const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};

// Promises
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    // console.log(criptomonedas[0].name)
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// Consulta la API par aobtener un listado de Criptomonedas
function consultarCriptomonedas() {

    // Ir  AtoPLISTS Y Despues market capp 
    // const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    // CoinGecko - gratuita sin registro
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

    fetch(url)
        .then( respuesta => respuesta.json()) // Consulta exitosa...
        .then( resultado => obtenerCriptomonedas(resultado)) // 
        .then( criptomonedas  =>  selectCriptomonedas(criptomonedas) )
        .catch( error => console.log(error));
}


// llena el select 
function selectCriptomonedas(criptomonedas) {

    // conocer el tiempo de ejecucion
    const inicio = performance.now(); // muestra el tiempo de ejecucion de cierta parte del codigo

    criptomonedas.forEach( cripto => {
        // console.log(cripto);
        const { id, name } = cripto;
        const option = document.createElement('option');
        option.value = id;
        option.textContent = name;
        // insertar el HTML
        criptomonedasSelect.appendChild(option);
    });

    // for (let i = 0; i < criptomonedas.length; i++) {
    //     criptomonedas.forEach( cripto => {
    //         // console.log(cripto);
    //         const { id, name } = cripto;
    //         const option = document.createElement('option');
    //         option.value = id;
    //         option.textContent = name;
    //         // insertar el HTML
    //         criptomonedasSelect.appendChild(option);
    //     });
        
    // }

    // termina la validacion
    const fin = performance.now();

    // ver tiempo q termio en ejecutarce
    console.log(fin-inicio);

}


function leerValor(e)  {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    // Extraer los valores
    const { moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }


    consultarAPI();
}


function mostrarAlerta(mensaje) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
       formulario.appendChild(divMensaje);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
}


function consultarAPI() {

    const { moneda, criptomoneda} = objBusqueda;

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${criptomoneda}&vs_currencies=${moneda}&include_24hr_change=true&include_market_cap=true`;

    mostrarSpinner();

    fetch(url)  
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            // console.log(cotizacion[criptomoneda])
            // mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
            mostrarCotizacionHTML(cotizacion[criptomoneda]);
        });

}

function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML();

    console.log(cotizacion);
    // const  { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
    const  { mxn, mxn_24h_change, mxn_market_cap} = cotizacion;


    // debugger;

    // const precio = document.createElement('p');
    // precio.classList.add('precio');
    // precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${mxn}</span> </p>`;

    // const precioBajo = document.createElement('p');
    // precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${mxn_24h_change}%</span></p>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${mxn_market_cap}</span></p>`;

    // debugger;

    // resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    // resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

    formulario.appendChild(resultado);
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>    
    `;

    resultado.appendChild(spinner);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
  }