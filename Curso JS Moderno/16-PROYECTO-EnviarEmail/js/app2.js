
// escuchamos cuando el HTML este cargado
document.addEventListener('DOMContentLoaded', () => {

    // Dentro de este contenedor vamos a colocar el codigo

    // creamos un objeto que va servir para validar ñps inputs esto va quedar en forma global para utilizarlo dentro de funciones
    const email = {
        email : '',
        asunto : '',
        mensaje : ''
    }

    // seleccionamos los elementos del html 
    const inputEmail = document.querySelector('#email');
    const inputEmailCC = document.querySelector('#emailCC');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    const enviarBtn = document.querySelector('#formulario button[type="submit"]');
    const resetBtn = document.querySelector('#formulario button[type="reset"]');

    const spinner = document.querySelector('#spinner');

    // console.log(resetBtn)

    // Llamamos los eventos

    // validamos los campos si estan llenos o tienen errores asincronicos
    inputEmail.addEventListener('blur', validar);
    inputEmailCC.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail);

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetearFormulario();
    });


    // envir formulario
    function enviarEmail(e) {
        e.preventDefault();

        // console.log(email) envia por consumo de api

        // mostramos el spinner
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        // metodo de tiempo programado
        setTimeout(() => {
            // despues de 3 segundos realizara esta operacion
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetearFormulario();
            
            // creamos un mensaje de exito
            const alertaExito = document.createElement('p');
            alertaExito.textContent = 'El mensaje fue enviado con exito';
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');

            formulario.appendChild(alertaExito);

            // borrar el mensaje
            setTimeout(() => {
                alertaExito.remove();
            },3000);
        }, 3000);


    }

    // validar los inputs
    function validar(e) {

        // que los campos obligatorios no esten vacio
        if (e.target.value.trim() === '' && e.target.id !== 'emailCC') {

            mostrarAlerta(`El campo ${e.target.id} debe de estar lleno`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarCampos();
            return;
        }


        // validar la sintaxis del eamil
        if((e.target.id === 'email' || e.target.id === 'emailCC') && !validarEmail(e.target.value)) {

            mostrarAlerta(`El ${e.target.id} no es correcto`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarCampos();
            return;

        }


        // console.log(email)

        limpiarAlerta(e.target.parentElement);

                // llenamos el objeto para abrir el boton
        if (e.target.id !== 'emailCC') {
            email[e.target.id] = e.target.value.trim().toLowerCase();
            comprobarCampos();
        }

    }

    // Comprube que los campos obligatorios esten llenos
    function comprobarCampos() {
        // tratamos el objeto y lo pasamos a un array para usar los metodos array
        if (Object.values(email).includes('')) {
            enviarBtn.classList.add('opacity-50');
            enviarBtn.disabled = true;
            return;
        }
        enviarBtn.classList.remove('opacity-50');
        enviarBtn.disabled = false;
    }

    // validar email
    function validarEmail(email) {

        const emailActo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        // comprobar la accion regular con el parametro enviado en este caso email esto se hace con el metodo test()
        const resultado = emailActo.test(email);
        return resultado;
    }

    // Generar alerta en HTML
    function mostrarAlerta(mensaje, referencia) {

        // limpiar el campo para colocar la alerta
        limpiarAlerta(referencia);
        
        // creamos el elemento html para colocar el mensjae
        const alerta = document.createElement('p');

        alerta.textContent = mensaje;
        alerta.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // agregamos en el html
        referencia.appendChild(alerta);
    }

    // limpiar el html donde va la alerta
    function limpiarAlerta(referencia) {

        const alerta = referencia.querySelector('.bg-red-600');

        // si encuentra la clase en la referencia elimina el mensjae
        if (alerta) {
            alerta.remove();
        }
    }


    // resetear el formulario
    function resetearFormulario() {

        // reiniciamos objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarCampos();
    }

});