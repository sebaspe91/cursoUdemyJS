(function() {
    let DB;
    let idCliente;
    
    // variables de los input
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () => {

        // actualizar registro
        formulario.addEventListener('submit', actualizarCliente);

        // conectamos a la base de datos
        conectarDB();

        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search);

        // pasamos los valores del parametro a una constante
        idCliente = parametrosURL.get('id');
        //  console.log(idCliente)

        //  si obtenemos el id realizamos la operacion
        if(idCliente) {

            // este punto se soluciona con una operacion ansincrona para que no vote error por no conectar la base de datos antes de cargarla para esto mientras se coloca dentro de un setItem()

            setTimeout(() => {
                obtenerCliente(idCliente);
            },1000);
            
        }

        // actulizar los daos del cliente en la base de datos
        function actualizarCliente(e) {
            e.preventDefault();
            // Validamos que los campos no esten vacios
            if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '') {
                imprimirAlerta('Todos los campos deben de estar llenos', 'error');
                return;
            }
            
            // agregamos las actualizaciones

            // creamos un objeto
            const clienteActualizado =  {
                nombre : nombreInput.value,
                email : emailInput.value,
                telefono : telefonoInput.value,
                empresa : empresaInput.value,
                id : Number(idCliente)
            }

            // actualizamos DB
            const transaction = DB.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');

            // pasamos los datos
            objectStore.put(clienteActualizado);

            transaction.oncomplete = function() {
                imprimirAlerta('Editado correctamente');

                // volvemos a la pagima
                setTimeout(() => {
                    window.location.href= 'index.html';
                }, 3000);
            }

            transaction.onerror = function() {
                imprimirAlerta('Hubo un error');
            }
        }


        // Funcion para obtener cliente
        function obtenerCliente(id){
            
            // para obtener el cliente debe de estar conectada la DB y posteriormente traer los datos

            const transaction = DB.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');

            // cuando se creo la base de datos anteriormente se creo un OPEN CURSOR esto es para pasar elemento por elemento o fila por fila los datos de la base de datos. como ya esta abierta no es necesario volverlo a escribir solo se asigna
            
            const cliente = objectStore.openCursor();

            cliente.onsuccess = function(e) {
                // pasamos el evento y lo ponemos
                const cursor = e.target.result;

                // comprobamos si estan los datos
                if(cursor) {
                    
                    //pasamos solo el id
                    if(cursor.value.id === Number(id)) {
                        // funcion para llenar el formularo de editar
                        llenarFormulario(cursor.value);
                    }
                    cursor.continue();
                }
            }
        }

        // funcion para llenar formulario
        function llenarFormulario(datosCliente) {
            console.log(datosCliente)
            const {nombre, empresa, id, email, telefono} = datosCliente;
            nombreInput.value = nombre;
            emailInput.value = email;
            telefonoInput.value = telefono;
            empresaInput.value = empresa;
        }

        // conectamos a la base de datos
        function conectarDB() {
            const db = window.indexedDB.open('crm', 1);

            db.onerror = function() {
                console.log('Error en la conexion de la DB');
            }

            db.onsuccess = function() {
                console.log('conexion exitosa');
                DB = db.result;
            }
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

    });
})();