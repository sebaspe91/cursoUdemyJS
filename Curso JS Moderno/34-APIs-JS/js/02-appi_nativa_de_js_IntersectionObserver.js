// API  "INTERSECTION OBSERVER"
// sirve para saber cuando se activa un elemento cuando sea visible en la pantalla cuando se hace scroll 
// SINTAXIS     intersectionObserver()

document.addEventListener('DOMContentLoaded', () => {
    // colocamos la API
    const observer = new IntersectionObserver((cosa) => {
        if(cosa[0].isIntersecting) {
            console.log('ya esta visible'); // trae muchas cosas solo nos importa lo primero
        }
    });

    // Con este codigo puede observar los elementos que desee
    observer.observe(document.querySelector('.premium'));

    // la constante .observe() esta pendiente cuando un elemento es visible y envia informacion
});