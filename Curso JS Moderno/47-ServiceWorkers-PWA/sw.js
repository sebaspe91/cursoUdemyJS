// Este metodo install solo se ejecuta una sola vez hasta que el Service Worker es instalado, una vez instalado no se vuelve a ejecutar

// const { cache } = require("react");

// Se crea una variable para que lea los datos de cache cuando no halla conexion para eso se crea el la variable archivo
const nombreCache = 'apv-v1';

const archivos = [
    // cachear lo q es la pagina principal
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// aca no se utiliza self en venz de windows

// Installar el service workers
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    e.waitUntil( // espera hasta q descargue el ultimo cacheo
        caches.open(nombreCache)
            .then( cache => {
                console.log('Cacheando')
                cache.addAll(archivos)
            })
    )
});

/** Para eliminar la instalcion 
 * 
 * - vamos a la ventana de navegacion damos click en inspeccionar
 * - buscamos la ventana de aplication
 * - damos click en "Unregister"
*/


// EVENTO PARA ACTIVAR EL SERVICE WORKER
self.addEventListener('activate', e => {
    console.log('Servir Worker activado');

    // Espacio para agregar las actualizaciones de las verisones o q se le haga la pagina automatiza que se borre la cache de los navegadores y se acrgue la ultima version
    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);

                return Promise.all(
                    keys.filter(key => key !== nombreCache
                        .map(key => caches.delete(key)) // Borra las versiones en cache
                    )
                )

            })
    )

});

/**
 * ACTIVAR WORKERS
 * 
 * -en la ventana de aplications 
 *  - damos clikck en "skipWaiting", esta debajo de Stop
 */


// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request); // ← esto faltaba
            })
            .catch(() => caches.match('/error.html'))
    )
});