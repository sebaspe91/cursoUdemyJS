
// creamos la baraible global para la base de datos
let DB;

// funcion para llamar la base de datos
document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    // esperamos a que se cree y se conecte la base de datos
    setTimeout(() => {
        agregarCliente();
    }, 5000);
});

// funciones

function crmDB() {
    let crmDB = window.indexedDB.open('crm', 1);

    // error en la conexion
    crmDB.onerror = function(e) {
        console.log('error en la conexio de la base de datos');
    } 

    // conexion aceptada
    crmDB.onsuccess = function(e) {
        console.log('La conexion se realizo correctamente');

        DB = crmDB.result;
        console.log(DB)
    } 

    // cconfiguracion de la base de datos crear las tablas
    crmDB.onupgradeneeded = function(e) {
        db = e.target.result;

        // creamos el auto incrementar
        let objectStore = db.createObjectStore('crm', {
            keyPath : 'crm',
            autoIncrement : true
        });

        // creamos las tablas
        objectStore.createIndex('nombre', 'nombre', {unique : false});
        objectStore.createIndex('email', 'email', {unique : false});
        objectStore.createIndex('tel', 'tel', {unique : false});

        console.log('columnas creadas');
    }
    
}

function agregarCliente() {

    // creamos los elementos transaccionales 
    let transaccion = DB.transaction(['crm'], 'readwrite');

    // si no hay error en la transaccion 
    transaccion.oncomplete = function(e) {
        console.log('Se realizo la transaccion correctamente');
    };

    // error
    transaccion.onerror = function(e) {
        console.log('Error en la transaccion');
    };

    // objeto que pide
    let objectStore = transaccion.objectStore('crm');

    // objeto 
    const nuevoCliente = {
        nombre : 'Juan Perez',
        email : 'jaun@gmail.com',
        tel : '3103607179'
    };

    let peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}