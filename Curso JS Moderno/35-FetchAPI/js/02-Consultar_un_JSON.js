

// consuktar un jeson
const cargarJsonBtn = document.querySelector('#cargarJSON');

cargarJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';

    clientes = fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos =>  mostrarHTML(datos))
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('#contenido');
    contenido.innerHTML = `<p>Empresa: ${empresa}</p>
                            <p>Nombre: ${nombre}</p>
                            <p>Trabajo: ${trabajo}</p>
                            <p>id: ${id}</p>`;
}