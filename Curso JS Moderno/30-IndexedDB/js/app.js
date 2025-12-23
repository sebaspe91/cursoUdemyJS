
/*

Base de datos indexedDB

Es una API en JavaScript para almacenar grandes cantidades de datos estructurados

A diferencia de LocalStore puede ALMACENAR: 
    - String
    - Booleanos
    - Archivos
    - Cualquier tipo de datos soportado por javascript

No tiene "Limites" conocidos en su almacenamiento, aunqur los archivos de mas de 50mb va a preguntar por permisos

Soportado en todas las ultimas versiones de los navegadores

El INDEXEDDB es una base de datos completa, PERO estos datos son visibles para culquiera --- No almacenar informacion delicada

Encontrar la obcion de indexDB en FireFox y Chrome

    -inspaccionar 
    -firefox(Almacenar)
    -Chrome(Aplication)

*/

// Crear una base de datos

// variable sin asignar valor
let DB;

// cuando cargue el documento
document.addEventListener('DOMContentLoaded', () => {

    // funcion que crea la base de datos
    crmDB();

    // funcion q se usa en el ulitimo video de la seccion indexedDB para 
    // despues de 5 seg se efecta la funcion
    setTimeout(() => {
        crearCliente();
    }, 5000);

});

// funcion
function crmDB() {

    // crear una base de datos VERSION 1.0
    let crmDB = window.indexedDB.open('crm', 1);  // .open('name_DataBase', version)


    // Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la base de datos');
    }

    // Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');

        // cuando todo este bien

        // le pasamos la Base de Datos de forma global para pasarla a las otras funciones
        
        DB = crmDB.result;
    }

    // Configuracion de la base de datos

    // los comandos solo se deben de crear una sola vez
    crmDB.onupgradeneeded = function(e) {

        // muestra el resultado de este event

        // base de datos
        let db = e.target.result;

        /**
            elemento que interactua con la base de datos

            crea un objeto en la base de datos "conexion"



            const objectStore.createObjectStore('name_DataBase', {

                keyPath: 'url_dataBase',
                autoIncrement: true     // auto incremental

            });


         */
        
        // crea una conexion con la base de datos "conexion"
        // permite crear las columnas
        let objectStore = db.createObjectStore('crm', {
            keyPath: 'crm', 
            autoIncrement: true
        });

        // Creamos las columnas
        /*
            
        'nombre'= hace referencia al nombre de la columna

        'nombre' = keyPath = es como hacer referencia para consultar la tabla de la columna especificada "nombre"


        const createIndex('name_columna', 'name_keyPath', {
            unique: true,   // es si hay o no valores iguales
        });
        



         */

        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');

    }

}



// funcion de ultimo video seccion indexedDB 

// indexedDB = Funciona con transacciones

// transacciones  =   es cuando se cumple correctamente todos los pasos para realixar una operacion. ejemplo el cajero automatico



// tabla cliente
function crearCliente() {

    // .transaccion = habilita el camino para usar las transacciones

    // ['crm] = name Data Base

    // 'readwrite'  = accion que se va hacer q es leer y escribir datos

    let transaction = DB.transaction(['crm'], 'readwrite');

    // verificar si se cumple la transaccion

    // Sin errores
    transaction.oncomplete = function(event) {
        console.log('Transaccion completada');
    }

    // con errores
    transaction.onerror = function(event) {
        console.log('Hubo un error en la transacción');
    }


    // Escribir un OBjeto en la base de datos 

    let objectStore = transaction.objectStore('crm');

    // creamos nuevo objeto
    const nuevoCliente = {
        // columnas de la base de datos
        telefono: 3503360273,
        nombre: 'Juan Sebastian',
        email: 'seb@gmail.com'
    }


    // Enviar los datos a la Base de Datos

    // agregamos los datos a la base de datos
    let peticion = objectStore.add(nuevoCliente);

    // // Actualizar los datos a la base de datos
    // peticion = objectStore.put(nuevoCliente);

    // // borrar los datos a la base de datos
    // peticion = objectStore.delet(nuevoCliente);

    console.log(peticion)
}