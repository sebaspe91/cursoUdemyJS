import {nuevoCliente} from "./API.js";
import {imprimirMensaje, validar} from "./funciones.js";

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


})();