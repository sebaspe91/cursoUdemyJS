// ---------------- pwa ......................:

    // Son Rapidas - Cargan toda la informacion en menos de 5 segundos

    // es instalable - Se puede navegar o instalar en tu navegador o telefono movil cxomo una aplicacion nativa

    // Sopeorte Offline - Pueden funcionar incluso sin conexion a internet


// ----------- Que son los Service Workers -----------------

    // Es la base de una PWA. Son Scripts que estan corriendo todo el tiempo detras de escenas

    // Funcionan Offline

    // No tienen acceso al DOM

    // Cargan d eforma instantanea

    // Pueden sincronizar datos detras de escena o sin interferir en la navegacion


// ------- Funiones No Disponibles en Service Workers ----------

    // No soporta windwos solo (self)

    // No utiliza document solo (caches)

    // No utiliza localStorage solo (fetch)

// ----------------------------------------------------------------------

// ------------ Mirar en el navegaro en lingthause q nivel de PWA tiene la pagina eso qda al lado de inspecciona de consolea ----------------

// --------------------- paso a paso -----------------------

/**
 * 1- Crear un archivo manifest.json
 * 
 */

// --------------------- INICIO CODIGO -----------------------------------

// Validamos si el navegador soporta Service Worker ----------
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js') // Registrar el servicio worker
        .then(registrado => console.log('Se instalo correctamente... ', registrado))
        .catch(error => console.log('Fallo la instalacion... ', erorr))
} else {
    console.log('Service Workers no soportado');
}

/**
 * VER SI ESTA CONECTADO 
 *  - Ingresa a inspeccionar el navegador
 *  - En la ventana de Aplication damos click
 *  - Vemos como esta conectado y a localizado la el archivo creado sw.js
 */

/** Para eliminar la instalcion 
 * 
 * - vamos a la ventana de navegacion damos click en inspeccionar
 * - buscamos la ventana de aplication
 * - damos click en "Unregister"
*/

/**
 * ----------- INSTALAR UNA PWA ------------------
 * 
 * Para que una progesi web aplications se pueda instalar tiene que tener 3 cosas:
 * 
 *  1- Un archivo json manifest.json valido
 *  2- Tiene que tener un dominio HTTPS o ser un LocalHost
 *  3- Tiene que tener registrado el addEvnetListener('fetch') o evento fetch en el archivo sw.js
 * 
 */