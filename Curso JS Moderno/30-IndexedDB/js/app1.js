
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    // time
    setTimeout(() => {
        crearCliente();
    });
}, 5000);




function crmDB(){
    // creamos la base de datos
    let crmDB = window.indexedDB.open('crm', 1.1);



    // evetos

    // error
    crmDB.onerror = function(){
        console.log('Hay un error en la cracion de la base de datos');
    }

    // correcto
    crmDB.onsuccess = function(){
        console.log('Sin error en la cracion de la base de datos');

        DB = crmDB.result;
        // console.log(DB)
    }



    // Comando que solo se repite una vez y crea las columnas
    crmDB.onupgradeneeded = function(e) {

        // base de datos
        let db = e.target.result;

        // el objeto que interactua con la base de datos
        let objectStore = db.createObjectStore('crm', {

            // primary key
            keyPath : 'crm',
            autoIncrement : true

        });

        // crean las columnas 
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});

        console.log('Columnas creadas en onupgradeneded')
    }
}




// crar la tabla de clientes
function crearCliente() {
    
    // habilitar transacciones de datos = validacion
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transacion completa');
    }

    // error
    transaction.onerror = function() {
        console.log('Hubo un Error en la Transaccion');
    }

    // Agregar objetos o datos a la base de datos
    let objectStore = transaction.objectStore('crm');

    // crear el objeto
    const nuevoCliente = {
        telefono: 3503360273,
        nombre: 'Juan Sebastian',
        email: 'seb@gmail.com'
    }

    // agregamos los datos a las columnas

    
    // agregamos los datos a la base de datos
    let peticion = objectStore.add(nuevoCliente);

    // // Actualizar los datos a la base de datos
    // peticion = objectStore.put(nuevoCliente);

    // // borrar los datos a la base de datos
    // peticion = objectStore.delet(nuevoCliente);

    console.log(peticion)
}