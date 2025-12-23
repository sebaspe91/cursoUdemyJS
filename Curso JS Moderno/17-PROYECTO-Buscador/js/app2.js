
// seleccionamos los elementos
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

// Creamos objeto que contiene los valores para buscar
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

// agregar años 
const max = new Date().getFullYear();
const min = max - 15;

// creamos el evento principal
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar los elementos
    mostrarAutos(autos);

    // llenar años
    llenarYears();
});

marca.addEventListener('change', llenarSelectBusqueda);
year.addEventListener('change', llenarSelectBusqueda);
minimo.addEventListener('change', llenarSelectBusqueda);
maximo.addEventListener('change', llenarSelectBusqueda);
puertas.addEventListener('change', llenarSelectBusqueda);
transmision.addEventListener('change', llenarSelectBusqueda);
color.addEventListener('change', llenarSelectBusqueda);


// llenar años en el select
function llenarYears() {
    for (let i = max; i > min; i--) {
        const ano = document.createElement('option');
        ano.value = i;
        ano.textContent = i;

        year.appendChild(ano);        
    }
}

// mostrar autos
function mostrarAutos(autoBuscado) {

    // limpiar HTML
    limpiarHTML();

    // recorremos el arreglo donde van los objetos con los valores
    autoBuscado.forEach(auto => {
        
        // seleccionamos los valores a mostrar 
        const {marca, year, modelo, precio, puertas, transmision, color} = auto;
        
        // creamos el elemento
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `Marca: ${marca} - Año ${year} - Modelo: ${modelo} - Precio: ${precio} - Puertas: ${puertas} - Transmision: ${transmision} - Color: ${color}`;
        resultado.appendChild(autoHTML);

        
    });
}

// eliminar el text sobre escrito
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// llenar el objeto de busqueda
function llenarSelectBusqueda(e) {
    datosBusqueda[e.target.id] = e.target.value;
    filtrarAuto();
} 

// filtrar autos
function filtrarAuto() {
    // filtramos
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    console.log(resultado.length)
    if (resultado.length > 0) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

// mensaje de no relultado
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('p');
    noResultado.textContent = 'No hay resultados de busqueda';
    noResultado.classList.add('alerta', 'error');
    resultado.appendChild(noResultado);
}

// campos de filtrado
function filtrarMarca(auto) {
    const {marca} = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;

    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;

    if (maximo) {
        return auto.precio >= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;

    if (color) {
        return auto.color === color;
    }
    return auto;
}
// console.log(resultado)