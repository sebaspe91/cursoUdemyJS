/**
 * NOTA:
 *      Para los navegadores es  bueno descargar o instalarle una extension que permite ver mejor los JSON
 *      name extension ===> json View
 */


const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}

function mostrarHTML(clientes) {
    clientes.forEach(cliente => {
        const {author, author_url, filename, format, height, id, post_url, width} = cliente;
        const contenido = document.querySelector('#contenido');
        
        const card = document.createElement('div');
        card.dataset.id = id;

        const authorText = document.createElement('p');
        authorText.textContent = `Autor: ${author}`;

        const author_urlText = document.createElement('p');
        author_urlText.textContent = `Dreccion web: ${author_url}`;

        const filenameText = document.createElement('p');
        filenameText.textContent = `Filename: ${filename}`;

        const formatText = document.createElement('p');
        formatText.textContent = `Formato: ${format}`;

        const heightText = document.createElement('p');
        heightText.textContent = `Height: ${height}`;

        const imagenDiv = document.createElement('div');
        imagenDiv.innerHtml = `<a href="${post_url}" target="_blank">Ver Perfil</a>`;

        const widthText = document.createElement('p');
        widthText.textContent = `width: ${width}`;

        card.appendChild(authorText);
        card.appendChild(author_urlText);
        card.appendChild(filenameText);
        card.appendChild(formatText);
        card.appendChild(heightText);
        card.appendChild(imagenDiv);
        card.appendChild(widthText);

        contenido.appendChild(card);
    });
}