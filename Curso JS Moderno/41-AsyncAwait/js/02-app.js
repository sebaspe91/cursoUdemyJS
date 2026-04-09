

// simular que estan descargando clientes

function descargarCliente() {
    return new Promise((resolve, reject) => { // resolve ===> cumple True ; reject ===> Falla False
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        },3000);
    });
}

/**
 * Async ==> es la funcion padre para utilizar await donde se ejecuta el Promise()
 * 
 * await ==> Es una forma de detener el codigo hasta q tenga el resultado q envio a consulta ya sea en una base de datos o api, espera a q se ejecute el Promise()
 * 
 * 
 * Los valores se deben de asignar en una nueva variable
 */

// Async await
async function ejecutar() {
    try {
        const respuesta = await descargarCliente();
        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();