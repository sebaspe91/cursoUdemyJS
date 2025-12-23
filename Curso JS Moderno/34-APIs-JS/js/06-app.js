// Esta API escuha lo que se hable con microfono y lo pasa a la pagina web

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    // arrancar recogn
    recognition.start();

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
        // como es un arrelo bidimencional 
        console.log(e.results[0][0]);

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