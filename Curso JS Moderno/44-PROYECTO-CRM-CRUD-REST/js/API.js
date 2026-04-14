

// creamos la base para llamar la api

const url = 'http://localhost:4000/clientes';

// vamos a agregar un nuevo cliente
export const nuevoCliente = async cliente => {
    
    try {
        await fetch(url, {
            method: 'POST', // Se coloca en metodo POST
            body: JSON.stringify(cliente), // Se combierte en string para ser guardado en el cuerpo de la base de datos de json
            headers: { // es la informacion del tipo de datos que se esta enviando
                'Content-Type': 'application/json' // es de acuerdo a lo que esta enviando al servidor, si es archivos utiliza algo llamado a "Multipar-form...."
            }
        });

        // Enviamos al usuario al index.html 
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}


// Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
    
}