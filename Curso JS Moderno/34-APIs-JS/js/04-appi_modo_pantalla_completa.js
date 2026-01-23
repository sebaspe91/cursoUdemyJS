// API para abrir una pantalla completa, es lo mismo que youtube oara colocar el video en la pantalla completa del pc

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen(); //API para la pantalla completa
}

function cerrarPantallaCompleta() {
    document.exitFullscreen(); // sale de modo de pantalla completa
}