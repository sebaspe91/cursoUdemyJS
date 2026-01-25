/**
 * FETCH APPI 
 * Es nativo de JavaScript
 * 
 * Sintaxis
 *  
 *      fetch('URL_donde_se_envian_los_datos_o_recibir_datos');
 * 
 * con fetch pude recibir datos o enviar datos
 * 
 * Fetch: 
 *      trae dos tipos de datos 
 *                              1) json()
 *                              2) text()
 */

// Cuando demos clik del boton de cargar txt descarga el archivo
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

// fuiniones
function obtenerDatos() {
    // usamos la appi
    const url = 'data/datos2.txt';
    fetch(url)
        .then( respuesta => { // este then ===> va el encabezado de la informacion o el detalle de la informacion
            // trae toda la respuesta
            console.log(respuesta);

            // trae el estado de la respuesta la respueta de protocolo de comunicacion http si es 200 o 400
            console.log(respuesta.status);

            // el texto de la respuesta
            console.log(respuesta.statusText);

            // trae la url
            console.log(respuesta.url);

            // trae el tipo
            console.log(respuesta.type);

            // para trae el contenido del texto
            return respuesta.text();
        } )
        .then(datos => {  // en el segundo .then ===> va el contenido de los datos 
            console.log(datos);
        })
        .catch(error => { // en caso de que tenga un error el documento
            console.log(error);
        })
}