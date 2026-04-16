import {editarCliente, obtenerCliente} from './API.js';
import {imprimirMensaje, validar} from "./funciones.js";

(function() {

    // campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async () => {
        // para seleccionar una paramater de la URL del navegador de la pagina actual es:
        const parametrpsURL = new URLSearchParams(window.location.search);
        const clienteId = parametrpsURL.get('id');

        // mostrar los datos en la interfaz para poder actualizarlos
        const cliente = await obtenerCliente(clienteId);
        mostrarCliente(cliente);

        // submit al fomrulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    // mostrar el cliente
    function mostrarCliente(cliente) {
        const {nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    // validar cliente
    function validarCliente(e) {
        e.preventDefault();


        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if (validar(cliente)) {
            imprimirMensaje(formulario, "Todos los campos son obligatorios", "error");
            return;
        }

        imprimirMensaje(formulario, "Cliente se actualizo correctamente");

        // agregar el nuevo cliente
        editarCliente(cliente);
    }



})();