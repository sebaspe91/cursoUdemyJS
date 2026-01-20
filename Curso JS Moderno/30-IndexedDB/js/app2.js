let DB;

document.addEventListener('DOMContentLoaded', () => {

    crmDB();

    setTimeout(() => {
        crearCliente();
    },5000);
    
});


// funciones
function crmDB() {
    // crar base de datos version 1.1
    let crmDB = window.indexedDB.open('crm', 1.1);

    // verificar la operacion

    // error db
    crmDB.onerror = function() {
        console.log('Hubo un error en la ccreacion de la base de datos.');
    }

    // exito
    crmDB.onsuccess = function() {
        console.log('Se creo la base de datos');

        // cargamos la variable global
        DB = crmDB.result;
    }

    // Se ejecuta una sola vez
    crmDB.onupgradeneeded = function(e) {

        // quien contiene la base de datos
        let db = e.target.result;

        // lo que interactua con la base de datos
        let objectStore = db.createObjectStore('crm', {
            keyPath : 'crm',
            autoIncrement : true
        });

        // crear las columnas
        objectStore.createIndex('nombre', 'nombre', {unique : false});
        objectStore.createIndex('email', 'email', {unique : true});
        objectStore.createIndex('telefono', 'telefono', {unique : false});

        console.log('Columnas creadas')
    }

    
}



// funcion para crear tablas o modulos
function crearCliente() {

    // transaccion
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(event) {
        console.log('Transaccion completa.');
    } 

    transaction.onerror = function(event) {
        console.log('Hubo un error en la transaccion.');
    }

    // se cre el auto incremental de los campos de la tabla
    let objectStore = transaction.objectStore('crm');

    // crear el objeto q contiene los datos a agregar
    const nuevoCliente = {
        nombre : 'juan',
        email : 'sebas@gmail.co',
        telefono : 3503360272
    }

    // agregar objeto a la base de datos
    let peticion = objectStore.add(nuevoCliente);

    console.log(peticion)
}