

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


// Elimina un cliente
export const eliminarCliente = async id => {
    
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// obten un cliente por su id
export const obtenerCliente = async id => {
    try {
        const respuesta = await fetch(`${url}/${id}`)
        const cliente = await respuesta.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// Actualizar cliente
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body:  JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        // Enviamos al usuario al index.html 
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}