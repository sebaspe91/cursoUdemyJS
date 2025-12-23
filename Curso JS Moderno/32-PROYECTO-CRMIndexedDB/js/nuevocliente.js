(function() {
    
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {

        // cotectamos a la base de datos
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    // reconexxion a la DB
    function conectarDB() {
        const conexionDB = window.indexedDB.open('crm', 1);

        conexionDB.onerror = function() {
            console.log('Hubo un erro en la conexion de la DB');
        };

        conexionDB.onsuccess = function() {
            DB = conexionDB.result;
        };
        
    }
    
    function validarCliente(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === "" || email === "" || telefono === "" || empresa === "") {
            imprimirAlerta("Todos los campos deben de estar llenos", "error");

            return;
        }

        // crear un objeto con la informacion de la DB
        let cliente = {
            nombre, 
            email,
            telefono,
            empresa,
            id : Date.now()
        };

        // agregamos el nuevo cliente a la db
        crearNuevoCliente(cliente);
    }

    // agregamos el nuevo cliente
    function crearNuevoCliente(cliente) {
        // realizamos las transacciones para agregar los datos a la DB
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        // Agregar los datos
        objectStore.add(cliente);

        // validacion
        transaction.onerror = function() {
            imprimirAlerta('Hubo un error al agregar al cliente', 'error');
        }

        transaction.oncomplete = function() {
            imprimirAlerta('Cliente se ha agregado correctamente');

            // ya agregado el cliente se devuelve a la pagina anteriror
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        };
    }

    // mostrar mensajes en la pantalla
    function imprimirAlerta(mensaje, tipo) {
            
        // alerta es una clase que se le agrega para que solo muestre un mensaje a la vez
        const alerta = document.querySelector('.alerta');

        if(!alerta){

            const divMensaje = document.createElement('div');
            divMensaje.textContent = mensaje;
            divMensaje.classList.add('px-4', 'py-', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

            if(tipo === 'error') {
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }

            formulario.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);

        }
    }
    
})();