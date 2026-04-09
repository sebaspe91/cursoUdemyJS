

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

// utilizando opereicon

// Async await
const ejecutar = async () => {
    try {
        const respuesta = await descargarCliente();
        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();