
// selectores 1350
const resultado = document.querySelector('#resultados');

// paginacion
const elementosPorPagina = 50;
let totalPaginas;
let iterador;
let paginaActual = 1;

document.addEventListener('DOMContentLoaded', () => {
    obtenerPokemons();
});

function obtenerPokemons() {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarPokemons(datos.results))
        .catch(error => console.log(error));
}


function mostrarPokemons(pokemons) {

    // borrar html
    console.log(pokemons.length)
    pokemons.forEach(pokemons => {
        console.log(pokemons);
    });
    
}