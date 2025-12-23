
const notificarBtn = document.querySelector('#notificar');

const abriPantallaCompletaBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarPantallaCompletaBtn = document.querySelector('#salir-pantalla-completa');


const salidaDiv = document.querySelector('#salida');


// apis
notificarBtn.addEventListener('click', () => {
    // Notification = es una API y como constante tiene .requestPermission() que pregunta antes de efectuar.
    // Como todas usan Promises se consulta .then
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        })
});

const verNotificaionBtn = document.querySelector('#verNotificacion');

// granted = es la true cuando se acepta recibir notificaiones con un console.log() puede mostrala

// se hace para verificar si desea recibir la notificaion y ejecutar el codigo

verNotificaionBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon : 'img/ccj.png', // muestra una imagen
            body : 'Texto descriptivo' // texto 
        });
        
        // envia una ruta cuando se cliquea la notificacion
        notificacion.onclick = function() {
            window.open('https://avacopro.appcotecnova.es/');
        }
    }
});