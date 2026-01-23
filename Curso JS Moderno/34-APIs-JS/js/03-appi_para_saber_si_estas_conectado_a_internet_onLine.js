// API onLine = que sirve para saber si esta conectado o no en linea y haci enviar un mensaje al usuario

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    console.log('Hola mundo')
    if (navigator.onLine) {
        console.log('Si esta conectado');
    } else {
        console.log('No esta conectado');
    }
}