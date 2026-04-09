
// Consumir varios promis o varios await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes....');

        setTimeout(() => {
            resolve('Los clientes descargados correctamente');
        },5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos....');

        setTimeout(() => {
            resolve('Los pedidos se descargaron correctamente');
        }, 3000);
    });
}


// llamar la app
const app = async () => {
    try {
        // Cuando son varias consultgas se deben de usar con Promise.all([arreglos con las funciones a consultar, otra funcion()])
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
    
}

app();