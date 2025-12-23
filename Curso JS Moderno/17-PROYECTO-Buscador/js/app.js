
// variables

// select donde va la marca
const marca = document.querySelector('#marca');
// select donde va los años
const year = document.querySelector('#year');
// select donde va el precio minimo
const minimo = document.querySelector('#minimo');
// select donde va el precio maximo
const maximo = document.querySelector('#maximo');
// select donde va el numero de puertas
const puertas = document.querySelector('#puertas');
// select donde va la transmision
const transmision = document.querySelector('#transmision');
// select donde va el color
const color = document.querySelector('#color');

// contenedor para los resultados
// donde va a ir los resultado de los autos
const resultado = document.querySelector('#resultado');

// Crear un par de variables una va contener el año maximo y el minimo
// con new Date().getFullYear() = toma el año actual
const max = new Date().getFullYear();
const min = max - 10;

// creamos un objeto con la busqueda
// este objeto va tener los input de busqueda adentro esto quiere decir que cuando se selecciona un elemento de busqueda es agregado al objeto 
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

// eventos

document.addEventListener('DOMContentLoaded', () => {
    // console.log(e.target.children[0].children[1].children[1].children[2])

    // referencia para limpiar el producto
    // const referencia = e.target.children[0].children[1].children[1].children[2];

    // console.log(referencia)

    // Apenas cargue el Html se llama una funcion que muestra los autos
    mostrarAutos(autos);

    // Llena las opciones de años
    llenarSelect();
});

// Eventos Listener para los select de busquedas

// evento change = es cuando cambia el valor del select
marca.addEventListener('change', llenarSelectBusqueda);
year.addEventListener('change', llenarSelectBusqueda);
minimo.addEventListener('change', llenarSelectBusqueda);
maximo.addEventListener('change', llenarSelectBusqueda);
puertas.addEventListener('change', llenarSelectBusqueda);
transmision.addEventListener('change', llenarSelectBusqueda);
color.addEventListener('change', llenarSelectBusqueda);

// Funciones

// funcion que llena el objeto
function llenarSelectBusqueda(e){
    // Colocamos el valor a los objetos
    // datosBusqueda.marca = e.target.value;
    // lo mejoramos para varios elementos
    const elemento = e.target.id;
    datosBusqueda[elemento] = e.target.value

    // funcion que filtra en base a la busqueda 
    filtrarAuto();
}

// funcion que muestra los autos
function mostrarAutos(autos) {

    // Limpia los autos 
    limpiarHTML();

    // Mostrar el HTML

    // iteramos sobre el Objeto de autos que esta en el otro archivo js que esta al mismo nivel de este archivo app.js
    autos.forEach(auto => {

        // sacamos los valores del objeto auto
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        // creamos un parrafo para cada automovil
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // insertar en el html en el campo referenciado como resultado
        resultado.appendChild(autoHTML);
    });
}

// cuando se manda a imprimir o mostrar en la pagina lo hace imprimiendo en la parte de abajo y no borra el html, para eso tiene que borrarlo

function limpiarHTML(){
    // limpia el elemento miesntra tenga algo en el 
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


// termina el borrado empirico


// Llena los años del select
function llenarSelect() {
    
    // creamos un for que muestro los años del actual hasta el minimo
    for(let i = max; i >= min; i--) {
        
        // creamos un elemento que va dentro del select (option)
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}


// Funcion que filtra la busqeda
function filtrarAuto() {
    
    // filter
    // esta opcion usa encadenamiento de objetos().otorObjeto()
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    // console.log(resultado)

    

    // if que valide cuantos arreglos hay en resultado si hay mas de 1 q muestra los autos si no que muestre un mensaje
    if(resultado.length > 0){
        mostrarAutos(resultado);
        return;
    }
    noResultado();
    // return;
    
}

// funcion mia para mostrar mensaje en el html
function noResultado(){
    limpiarHTML();
    const mensaje = document.createElement('P');
    mensaje.classList.add('alerta', 'error');
    mensaje.textContent = 'No Hay Autos con esos Requerimientos';
    resultado.appendChild(mensaje)
    // return;
}

// funcion de alto nivel ya q una funcion llamo a otra funcion
function filtrarMarca(auto) {

    // si el usuario selecciona esta opcion
    const {marca} = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }

    // Si el usuario no a retornado nada
    // se envia todos los valores del objeto auto
    return auto;
}

// filtrar solo años
function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if(year) {
        // como los datos que vienen del array llegan como string y los del objeto estan en enteros con eso no se pasa informacion 
        return auto.year === parseInt(year);
    }
    return auto;
}

// Filtrar por precio el valor minimo
function filtrarMinimo(auto){

    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;

}

// Filtrar por precio el valor maximo
function filtrarMaximo(auto){

    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;

}

// filtrar por Numero de puertas
function filtrarPuertas(auto) {

    // si el usuario selecciona esta opcion
    const {puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas == puertas;
    }

    return auto;
}

// filtrar por transmision
function filtrarTransmision(auto) {

    // si el usuario selecciona esta opcion
    const {transmision} = datosBusqueda;
    if(transmision) {
        return auto.transmision == transmision;
    }
    
    return auto;
}

// filtrar por color
function filtrarColor(auto) {

    // si el usuario selecciona esta opcion
    const {color} = datosBusqueda;
    if(color) {
        return auto.color == color;
    }
    
    return auto;
}

