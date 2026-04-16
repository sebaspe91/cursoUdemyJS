
export function imprimirMensaje(ubicacion, mensaje, tipo) {
    const existe = document.querySelector('.mensaje-texto');

    if (!existe) {
        const mensajeTexto = document.createElement('P');
        mensajeTexto.textContent = mensaje;
        mensajeTexto.classList.add('text-center', 'px-4', 'py-2', 'rounded-lg', 'fond-bold', 'mt-4', 'mensaje-texto');

        if (tipo == 'error') {
            mensajeTexto.classList.add('bg-red-100', 'border-red-200', 'text-red-700');
        } else {
            mensajeTexto.classList.add('bg-green-100', 'border-green-200', 'text-green-700');
        }

        // colocamos el mensjae
        ubicacion.appendChild(mensajeTexto);

        setTimeout(()=>{
            mensajeTexto.remove();
        },3000);
    }
    
}

 // validar campos
export function validar(obj) {
        // Los valores del objeto que recibe como parametro, va hacer revisado uno a uno por .every() verifica que los campos no esten vacios 
        return !Object.values(obj).every(input => input !== '');
    }