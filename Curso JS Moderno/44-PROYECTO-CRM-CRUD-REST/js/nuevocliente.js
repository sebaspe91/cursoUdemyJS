import {nuevoCliente} from "./API.js";
import {imprimirMensaje} from "./funciones.js";

// USAMOS EL METODO IFI

(function() {
    

    // variables
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        // variables internas 
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if (validar(cliente)) {
            imprimirMensaje(formulario, "Todos los campos son obligatorios", "error");
            return;
        }

        imprimirMensaje(formulario, "Cliente registrado correctamente");

        // agregar el nuevo cliente
        nuevoCliente(cliente);
    }

    // validar campos
    function validar(obj) {
        // Los valores del objeto que recibe como parametro, va hacer revisado uno a uno por .every() verifica que los campos no esten vacios 
        return !Object.values(obj).every(input => input !== '');
    }

})();