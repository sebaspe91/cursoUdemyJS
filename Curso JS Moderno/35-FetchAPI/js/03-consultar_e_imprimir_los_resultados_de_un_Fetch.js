

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url)
        .then(resultado => resultado.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}


function mostrarHTML(clientes) {
    clientes.forEach(cliente => {
        const {empresa, nombre, trabajo, id} = cliente;
        const contenido = document.querySelector('#contenido');
        
        const card = document.createElement('div');
        card.dataset.id = id;
        const empresaText = document.createElement('p');
        empresaText.textContent = `Empresa: ${empresa}`;
        const nombreText = document.createElement('p');
        nombreText.textContent = `Nombre: ${nombre}`;
        const trabajoText = document.createElement('p');
        trabajoText.textContent = `Trabajo: ${trabajo}`;

        card.appendChild(empresaText);
        card.appendChild(nombreText);
        card.appendChild(trabajoText);

        contenido.appendChild(card);
    });
}