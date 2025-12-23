

// variable
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

// se crea un arreglo vacio donde van a ir almacenados todos los tweets
let tweets = [];



// event Listeners

// llamamos la funcion
eventListeners();

function eventListeners() {
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // cuando el documento este listo con datos nuevos
    document.addEventListener('DOMContentLoaded', () => {

        // se asigna el valor que tenga almacenado en tweets pero si no tiene ningun valor sale como null y eso marca un error para evitar esto se le da como opcion que si no encuentra datos lo coloque por dafult en un arreglo vacio []
        tweets = JSON.parse(localStorage.getItem('tweetX') || []);

        // mostramos lo del elemento
        crearHTML();
    });
}




// Funciones

// funcion que garega el twts al arreglo
function agregarTweet(e) {
    e.preventDefault();    

    // se crea variables que estan dentro del formulario
    // texarea
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    // para agregar un elemento hay q tener presente que bueneo identificarlo para eliminarlo mas adelante para esto usamos el Date.now() que arroja los milesegundos y nunca se repiten con esto tenemos un identificador para que se relacione con elemento a agregar se crea en un objeto

    const tweetObj = {
        id : Date.now(),
        tweet : tweet
    }
    
    // añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Creamo el HTML
    crearHTML();

    // reiniciar el Formulario
    // esto es para borrar los elementos que estan el input o textarea
    formulario.reset();
}

// mostrar mensaje de erro
function mostrarError(error){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // eliminar el mensae de error pasados 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// funcion que crea el html muestra un listado de los tweets
function crearHTML() {    

    // se valida que si el arreglo tweets tiene algun elemento se ejecute ya que este crearHTML() tambien se usara para eliminar los tweets y si no tiene ya nada ps no se ejecuta

    if(tweets.length > 0) {

        limpiarHTML();

        tweets.forEach(tweet => {

            // creamos un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';  // es lo mismo q textContent

            // añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                // llamado de funcion borrarTweet()
                borrarTweet(tweet.id);
            }

            // creamoe l html
            const li = document.createElement('li');

            // añadir al texto
            li.textContent = tweet.tweet;

            // asignamos el boton al elemento de la lista
            li.appendChild(btnEliminar);

            // insertamos en el html
            listaTweets.appendChild(li);
    
        });

    }
    
    // desspues de crear el Html se puede sincronizar el localStorage
    sincronizarStorage();
}

// agrega los twits actuales al local storage
function sincronizarStorage() {
    localStorage.setItem('tweetX', JSON.stringify(tweets));
}


// funcion que limpia el html
function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}
