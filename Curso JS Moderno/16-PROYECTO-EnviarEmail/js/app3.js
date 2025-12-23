
// esperamos que el documento html se descargue
document.addEventListener('DOMContentLoaded', () => {

    // objeto para validar campos
    const email = {
        email : '',
        asunto : '',
        mensaje : ''
    }

    // se llama los elementos de HTML a utilizar
    const emailInpunt = document.querySelector('#email');
    const emailCCInpunt = document.querySelector('#emailCC');
    const asuntoInpunt = document.querySelector('#asunto');
    const mensajeInpunt = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const enviarBtn = document.querySelector('#formulario button[type="submit"]');
    const resetBtn = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Cargamos los eventos
    emailInpunt.addEventListener('blur', validar);
    emailCCInpunt.addEventListener('blur', validar);
    asuntoInpunt.addEventListener('blur', validar);
    mensajeInpunt.addEventListener('blur', validar);
    enviarBtn.addEventListener('click', enviarEmail);

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetFormulario();
    });

    // FUNCIONES

    // validar inputs
    function validar(e) {
       
        // Validar si estan vacios los campos obligatorios  
        if (e.target.id !== 'emailCC' && e.target.value.trim() === '') {

            // creamos la alerta 
            const mensaje = `El campo ${e.target.id} es obligatorio`;
            const referencia = e.target.parentElement;            
            mostrarAlerta(mensaje, referencia);
            email[e.target.id] = '';
            validarCampos();
            return;
        } 
        
        // validar el correo
        if ((e.target.id === 'email' || e.target.id === 'emailCC') && !validarEmail(e.target.value)) {
            mostrarAlerta(`El formato del email es incorrecto`, e.target.parentElement);
            email[e.target.id] = '';
            validarCampos();
            return;
        }

        limpiarAlerta(e.target.parentElement)

        // llenamos campos para validar boton
        email[e.target.id] = e.target.value.trim().toLowerCase();        
        validarCampos();
       
    }

    // enviar los datos
    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            const alertaExito = document.createElement('p');
            alertaExito.textContent = 'El email fue enviado correctamente';
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'font-bold', 'text-center', 'uppercase', 'rounded-lg', 'mt-10', 'text-sm');

            formulario.appendChild(alertaExito);

            // borrar la alerta de exito
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    // validar campos obligatorios llenos
    function validarCampos() {
        if (Object.values(email).includes('')) {
            enviarBtn.classList.add('opacity-50');
            enviarBtn.disabled = true;
            return;
        }
        enviarBtn.classList.remove('opacity-50');
        enviarBtn.disabled = false;

    }

    // validar la sintaxis del correo
    function validarEmail(email) {
        const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;        
        const resultado = regex.test(email);
        return resultado;
    }

    // mostrar el mensaje de alerta 
    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia)
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('bg-red-600', 'p-2', 'text-white', 'text-center');
        referencia.appendChild(alerta);        
    }

    // limpar las alerta
    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    // resetear el formulario
    function resetFormulario() {
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        console.log('desde reseteo')
    }



});