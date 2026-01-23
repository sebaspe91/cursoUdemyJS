// esta API esta pendiente cuando se cambie de pagina para activar una accion. EJEMPLO cuando se reproduce un video en alguna pagina y cambias de pagina el video automaticamente se detiene.

document.addEventListener('DOMContentLoaded', () => {
    // cuando es visible
    console.log(document.visibilityState);

    if(document.visibilityState === 'visible') {
        console.log('ejecutar la funcion para reproducir el video..');
    } else {
        console.log('Pausar el video');
    }
});