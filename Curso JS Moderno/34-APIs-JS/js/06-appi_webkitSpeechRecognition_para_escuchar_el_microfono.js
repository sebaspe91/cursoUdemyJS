// Esta API escuha lo que se hable con microfono y lo pasa a la pagina web

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    // creamos esta funciopon
    const SpeechRecognition = webkitSpeechRecognition;

    // creamos un nuevo objeto de SpeechRecognition
    const recognition = new SpeechRecognition();

    // HAY DIFERENTES ETAPAS -> arrancar, cuando empiza a escuchar, cuando el usario termina de hablar, y mostrar el resultado

    // arrancar recogn
    recognition.start();

    // empieza a escuchar

    // esto es una funcion que se va a ejecutar cunado recognition empiece a ejecutarse
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    // Cuando se haya gterminado de hablar se ejecugta la siguiente funcion
    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    // es el resultado de lo que grabo lo muestra en el js
    recognition.onresult = function(e) {
        // como es un arrelo bidimencional trae solo el objeto donde muestra el texo que se hablo
        console.log(e.results[0][0]); // con .results ==> trae un objeto grande con el resultado de lo que se hablo

        // mostrar lo grabado en pantalla
        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        // seguridad del texto
        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)} %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }

}