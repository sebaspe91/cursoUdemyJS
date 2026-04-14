
// selectores
const criptomodenasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

// objeto 
const criptoObjt = {
    moneda : '',
    criptomoneda : ''
};

// Crear Promise
const ObtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});

// cada vez que se inicie
document.addEventListener('DOMContentLoaded', () => {
    // consultar criptomonedas
    consultarCriptomonedas();

    // evento
    formulario.addEventListener('submit', submitFormulario);

    criptomodenasSelect.addEventListener('change', agregarObjeto);
    monedaSelect.addEventListener('change', agregarObjeto);
});


// funciones

// agregar objeto
function agregarObjeto(e) {
    criptoObjt[e.target.name] = e.target.value;
}

// consultar las criptomonedas
async function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await ObtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);
    } catch (e) {
        console.log(e);
    }
}



// obtener criptomomendas para ponerlas en ele select
function selectCriptomonedas(criptomonedas) {
    // console.log(criptomonedas);
    criptomonedas.forEach(tipoMoneda => {
        const {CoinInfo:{Name, FullName}} = tipoMoneda;

        const optionMoneda = document.createElement('OPTION');
        optionMoneda.value = Name;
        optionMoneda.textContent = FullName;

        criptomodenasSelect.appendChild(optionMoneda);
        // console.log(optionMoneda);
    });
    
}


// agregamos el fomrualario
function submitFormulario(e) {
    e.preventDefault();
    
    // sacar valores
    const {moneda, criptomoneda} = criptoObjt;

    if(moneda === '' || criptomoneda === '') {
        imprimirAlerta('Todos los campos son obligatorios');
        return;
    }

    // consultar appi
    consultarAPI();
}

// imprimir alerta
function imprimirAlerta(mensaje) {
    const existe = document.querySelector('.error');

    if (!existe) {
        const mensajeText = document.createElement('DIV');
        mensajeText.textContent = mensaje;
        mensajeText.classList.add('error');

        formulario.appendChild(mensajeText);

        setTimeout(() => {
            mensajeText.remove();
        },3000);
    }
}

// consukltar la api del valor 
async function consultarAPI() {
    // sacar valores
    const {moneda, criptomoneda} = criptoObjt;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    // insertar el sprint
    mostrarSpinner();

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        mostrarCotizacionHTML(datos.DISPLAY[criptomoneda][moneda]);
    } catch (e) {
        console.log(e);
    }
}

// imprimir la moneda en el DOM
function mostrarCotizacionHTML(cotizacion) {

    // limpiar html
    limpiarHTML();

    // price = cotizacion del dia; highday => lo mas alto del dia ; lowday lo mas bajo del dia ; CHANGEPCT24HOUR => porcentaje de ultimas 24 horas ; LASTUPDATE => actualizado
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    // creamos elementos
    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>Precio más alto del día <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>Precio más bajo del día <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `<p>Variación ultimas 24 horas <span>${CHANGEPCT24HOUR} %</span>`;

    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `<p>Ultima actualización <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

    

    console.log(PRICE)
}

// Limpiare html
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// mostrar el spinner
function mostrarSpinner() {
    const spinnerDiv = document.createElement('DIV');
    spinnerDiv.classList.add('spinner');
    spinnerDiv.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    // inserta
    resultado.appendChild(spinnerDiv);

}