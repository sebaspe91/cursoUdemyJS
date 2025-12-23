// escuchamos cuando el html este listo
// dentro de el colocamos todo el codigo de html
// este punto es importante para evitar errores al ejecutar el codigo
document.addEventListener('DOMContentLoaded', () => {

    // objeto para poder activar el boton de enviar
    const email = {
        email : '',
        asunto : '',
        mensaje : ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputEmailCC = document.querySelector('#emailCC');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    // para llegar hasta el boton que necesitamos es con id padre + boton con el atributo type y el valor que buscamos
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    // para mostrar la imagen de cargando...
    const spinner = document.querySelector('#spinner');

    // los eventos
    // los eventos van hacer especifico para la tarea que queremos hacer, si queremos q escuche cuando escriba o cuando cambie de input son dos especificaciones

    // Asigna eventos
    // blur = escucha cuando el usuario deja de seleccionar un input y selecciona otro elemento externo
    // Es buebo usar el blur para validar informacion ya que si el usaurio no coloco la informacion correcta puede validarse y enviar un msm apenas deje de seleccionarlo
    inputEmail.addEventListener('input', validar);

    // EmailCC
    inputEmailCC.addEventListener('input', validar);

    // asunto
    inputAsunto.addEventListener('input', validar);

    // mensaje
    inputMensaje.addEventListener('input', validar);

    // para el spinKit
    formulario.addEventListener('submit', enviarEmail);

    // receteo
    btnReset.addEventListener('click', function (e) {

        e.preventDefault();

        resetFormulario();
    });

    // Enviar email, fucncion que muestra el cargando
    function enviarEmail(e) {
        e.preventDefault();

        // muestra el icono de cargarndo...
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        // setTimeout() es una fucnion con cronometro
        // utiliza milisegundo para operar
        setTimeout(() => {
            // despues de 3 segundo quita el icono de cargando...
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            // receteamos los input
            resetFormulario();

            // creamos una alerta
            const alertaExito = document.createElement('P');

            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            // creamos otro setTimeout() para eliminar la alerta despues de 3 segundos
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000); // despues de 3000 milisegundo = 3 sg
    }

    // funcion que valida los input
    function validar(e) {
        
        // .trim() = elimina los espacios en blanco, cuando desea validar un input que no este vacio lo pueden llenar con espacios en blanco

        // e.target.id = muestra id de la etiqueta seleccionada, estas se colocan dentro del mensaje

        // e.target.parentElement = es el padre del input que seleccionamos sirve para colocar el mensaje debajo del input
        
        // validar si un campo esta vacio
        if((e.target.value.trim() === '') && e.target.id !== 'emailCC'){
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);

            email[e.target.name] = '';
            comprobarEmail();

            // return = hace que el codigo despues del if se detenga y evitar tantos else
            return;
        } 

        
        if(e.target.id === 'emailCC' && e.target.value.trim() === ''){
            
            limpiarAlerta(e.target.parentElement);
            return;
        }

        // validar el emial
        if((e.target.id === 'email' || e.target.id === 'emailCC') && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            if(e.target.id === 'email') {
                email[e.target.name] = '';
                comprobarEmail();
                return;
            }
            return;            
        } 

        // limpiar la alerta, cuando llene los campos desaparezca la alerta de los campos obligatorios
        limpiarAlerta(e.target.parentElement);

        // toLowerCase() = pasa el string en minuscula

        // asignar los valores al objeto email
        if(e.target.id !== 'emailCC'){
            email[e.target.name] = e.target.value.trim().toLowerCase();

            // comprobar el objeto de email
            comprobarEmail();
        }
        
    }

    // fucnion que muestra las alertas
    function mostrarAlerta(mensaje, referencia) {

        // parametros referencia = ubicacion del mensaje en el html, en el caso de colocar el mensaje sirve para q no elimen las alertas cuando encuentre otro input vacio solo actua en el secmento de HTML que escogio como referencia

        // generar un alerta en HTML
        // las etiquetas que creas con createElement por buenas practicas colocarlas en MAYUSCULAS

        // comprueba si ya existe una alerta
        limpiarAlerta(referencia);


        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }


    // funcion de limpiar el mensaje de alerta en el html
    function limpiarAlerta(referencia) {
        // esta condicion toma la referencia y limpia la alerta de la referencia tomada
        
        const alerta = referencia.querySelector('.bg-red-600');
        // esta alerta cuando se genera por primera vez arroja null si vuelve y se ejecuta arroja el elemento html donde esta la clase con esto podemos hacer la condicion para que no se repita el mensjae en la pagina
        if(alerta){
            alerta.remove();
        }
    }


    // validacion del email
    function validarEmail(email) {
        // esto es un exprecion regular
        // exprecion reglular = es un codigo como el de abajo que busca un patron en una cadena de texto o en una serie de numeros
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        
        // .test() = comprueba la exprecion regular con el parametro enviado
        const resultado = regex.test(email);
        return resultado;
    }

    // comprobar si todos los campos estan llenos
    function comprobarEmail() {

        // Object.values() = toma los valores de un objeto y los retorna en un array
        // .includes('') = verifica si hay un campo vacio dentro de un array si hay retonra true si no hay false
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        } 

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    // funcion para reinicar Los inputs
    function resetFormulario() {        

        // riniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();

        comprobarEmail();
    }
    
});