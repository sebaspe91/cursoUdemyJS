
// escogemos los elementos del html
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

// lista donde van los twiters
let tweets = [];

// funcion que va llamar los eventos
eventListeners();

function eventListeners() {
    // agregamos tweets
    formulario.addEventListener('submit', agregarTweet);

    // mostrar los datos que estan guardados
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweetX')) || [];
        crearHTML();
    });
}

// Funciones

// Agregar tweets
function agregarTweet(e) {
    e.preventDefault();

    // tomamos el tweets valor
    const tweet = document.querySelector('#tweet').value.trim();

    if ( tweet === '' ) {
        const error = 'El tweet debe de tener texto para enviarlo';
        mostrarError(error);
        return;
    }

    // creamos el objeto que va contener el tweet
    const tweetObj = {
        mensaje : tweet,
        id : Date.now() // devuelve todo en milesegundo
    }

    // Se agrega el objeto al array
    tweets = [...tweets, tweetObj];

    // mostramos el arry en el HTMl
    crearHTML();

    // resetamos el input
    formulario.reset();
    
}

// mostramos el tweet
function crearHTML() {

    // limiamos html
    limpiarHTML();
    // verificamos si tiene valores el array
    if (tweets.length > 0) {

        tweets.forEach(tweet => {
            const btnEliminar = document.createElement('a');
            btnEliminar.innerText = 'X';
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.onclick = () => {
                elminarTweet(tweet.id);
            }

            const mensajeTweet = document.createElement('li');
            mensajeTweet.textContent = tweet.mensaje;
            mensajeTweet.appendChild(btnEliminar);

            listaTweets.appendChild(mensajeTweet);
        });
        
    }

    // guardamos los dats en localstorage
    sincronizarStorage();
    
}

function sincronizarStorage() {
    localStorage.setItem('tweetX', JSON.stringify(tweets));
}

// limpiar el html
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Eliminar un tweet
function elminarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// mostrar error en html
function mostrarError(error) {
    const errorMensaje = document.createElement('p');
    errorMensaje.textContent = error;
    errorMensaje.classList.add('error');
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(errorMensaje);

    // eliminar el mensaje
    setTimeout(() => {
        errorMensaje.remove();
    },3000)
}

// console.log(listaTweets)