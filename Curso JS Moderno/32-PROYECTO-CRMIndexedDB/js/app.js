(function() {

    let DB;
    const listaCliente = document.querySelector('#listado-clientes');
    const mensajeDivTex = document.querySelector('.mensaje');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        // si ya esta creada es la forma para validarla que tenga datos
        if(window.indexedDB.open('crm', 1)) {
            // mostrar los clientes
            mostrarClientes();
        }

        // llamar la funcion para eliminar
        listaCliente.addEventListener('click', eliminarRegistro);
    })

    // funcion para eliminar registro
    function eliminarRegistro(e) {
       
        // Con este paso podemos saber si le dimos al boton especifico
        if(e.target.classList.contains('eliminar')) {
            let idEliminar = Number(e.target.getAttribute('data-cliente'));
            
            // este confirmar arroja un true o false
            const confirmar = confirm('Esta seguro que desea eliminar el registro');

            if(confirmar) {
                // realizamos la operacion
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                // Eliminamos los datos
                objectStore.delete(idEliminar);

                transaction.onerror = function() {
                    imprimirAlerta('No se elimino el registro correctamente', 'error');
                }

                transaction.oncomplete = function() {
                    imprimirAlerta('Se elimino el registro correctamente');

                    // Eliminamos los datos desde el padre
                    // se eliminan de la base de datos y quita la estructura de html
                    e.target.parentElement.parentElement.remove();
                }               

            }
        }
        // const existe = document.querySelector('.eliminar');
        // if(existe) {
        //     // 
        // }
    }

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

            mensajeDivTex.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);

        }
    }

    // Creamos la base de datos
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        // si hay error
        crearDB.onerror = function() {
            console.log('Hay un error en la conexion de la DB');
        };

        // sin error
        crearDB.onsuccess = function() {
            console.log('DB se creo sin novedad');
            DB = crearDB.result;
        };
        
        // se usa una sola vez se utiliza para crear la db con las tablas
        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath : 'id',
                autoIncrement : true
            });

            objectStore.createIndex('nombre', 'nombre', {unique:false});
            objectStore.createIndex('email', 'email', {unique:true});
            objectStore.createIndex('telefono', 'telefono', {unique:false});
            objectStore.createIndex('empresa', 'empresa', {unique:false});
            objectStore.createIndex('id', 'id', {unique:true});

            console.log('DB lista y creada');
        }

    }

    // Mostrar los clientes
    function mostrarClientes() {

        // abrir conexion
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error al conectar la DB');
        }

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        

            // mostrar cursor
            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e) {
                // pasamos los datos de la db
                const cursor = e.target.result;

                if(cursor) {
                    const {nombre, email, telefono, empresa, id} = cursor.value;


                    listaCliente.innerHTML += ` 
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();
                } else {
                    console.log('No hay mas registros');
                }
            }
        }
    }

})();