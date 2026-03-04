
// selectores 1350
const resultado = document.querySelector('#resultados');
// const paginacionDiv = document.querySelector('#paginacion');
let listaPokemnosObjt = []; // todos los pokemons
let listaPokemonsFavoritos = JSON.parse(localStorage.getItem('pokemonFavoritos')) ?? [];

// paginacion

// paginacion
const elementosPorPagina = 20;
let totalPaginas;
let iterador;
let paginaActual = 0;

const favoritos = document.querySelector('.favoritos');

document.addEventListener('DOMContentLoaded', () => {    

    if (favoritos) {
        obtenerFavoritos();
    } else {
        obtenerPokemons();
    }
});

function obtenerPokemons() {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${elementosPorPagina}&offset=${paginaActual}`; // limit => 100000
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => obtenerPokemonsApi(datos.results))
        .catch(error => console.log(error));
}


function obtenerPokemonsApi(pokemons) {
    // paginar con el total de paginas
    // totalPaginas = calcularPaginas(pokemons.length);

    // borrar html
    pokemons.forEach(pokemon => {

        const {name, url} = pokemon;

        // consumimso otra api para mirar los detalles del pokemns como imagen
        consultarPokemons(name, url);
        
    });
    
}

// consumode appi para obtener la imagen de pokems
function consultarPokemons(namePokemon, urlPokemon) {
    
    // consumo de api
    fetch(urlPokemon)
        .then(respuesta => respuesta.json())
        .then(datos => {
            
            const pokemonsObject = {
                id : datos.id,
                nombre : namePokemon,
                imagen : datos.sprites.front_default || './img/pokemonsNN.png',
                imagenAlt : `Imagen de ${namePokemon}`,
                altura : datos.height * 10, //cm
                peso : datos.weight / 10  // klg
            }

            listaPokemnosObjt = [...listaPokemnosObjt, pokemonsObject];
            imprimirPikemons(listaPokemnosObjt);
        }) // el valor null es de 10127  ====> .sprites.front_default
        .catch(error => console.log(error))
    
}

// PAGINACION

// sacamos el total de paginas que necesitamos
// const calcularPaginas = total => parseInt(Math.ceil(total/elementosPorPagina));

// creamos la funcion para recorrer el total de paginas
// function *crearPaginador(total) {

//     // con un for 
//     for (let i = 1; i <= total; i++) {
//         yield i;  // registra ese valor
//     }
// }
 

// imprimir los pkemons en el html
function imprimirPikemons(pokemons = []) {
    // limpiar html
    limpiarHTML(resultado);

    pokemons.forEach(pokemon => {
        const {id, nombre, imagen, imagenAlt, altura, peso} = pokemon;

        // crear el card
        const cardPokemon = document.createElement('DIV');
        cardPokemon.classList.add('w-full', 'sm:w-1/2', 'md:w-1/3', 'lg:w-1/4', 'p-3', 'mb-4', 'rounded', 'border-2', 'border-gray-700', 'bg-gray-200');
        cardPokemon.dataset.id = id;
        cardPokemon.id = `card${id}`;

        // imagen y sus elementos
        const imagenes = document.createElement('IMG');
        imagenes.classList.add('w-full');
        imagenes.src = imagen;
        imagenes.alt = imagenAlt;

        // div Body
        const cardBody = document.createElement('DIV');
        cardBody.classList.add('bg-white', 'text-center', 'text-black-700', 'mb-4');

        // textos
        const nombreText = document.createElement('H2');
        nombreText.classList.add('text-black-700', 'uppercase', 'font-bold');
        nombreText.textContent = nombre;

        const alturaText = document.createElement('P');
        alturaText.classList.add('text-black-700', 'font-bold');
        alturaText.innerHTML = `Altura: <span class="font-light">${altura} cm</span>`;  

        const pesoText = document.createElement('P');
        pesoText.classList.add('text-black-700', 'font-bold');
        pesoText.innerHTML = `Peso: <span class="font-light">${peso} Klg</span>`;  

        // botones
        const favoritoBtn = document.createElement('BUTTON');
        favoritoBtn.classList.add('p-3', 'mb-1', 'bg-black', 'text-white', 'font-bold', 'text-center', 'w-full', 'rounded', 'hover:bg-violet-600');
        favoritoBtn.id = `fav${id}`;
        // favoritoBtn.textContent = 'Favorito';

        const existe = listaPokemonsFavoritos.some(pokemonF => pokemonF.id === id);


        if (existe) {

            favoritoBtn.classList.remove('bg-black');
            favoritoBtn.classList.add('bg-red-700');
            favoritoBtn.textContent = 'Eliminar De Favorito';
            // favoritoBtn.classList.contains('agregar-carrito')
            favoritoBtn.onclick = () => {
                console.log('click eliminar'); // COMENTARIO
                elminarFavorito(pokemon);
                         
            }
        } else {
            favoritoBtn.classList.remove('bg-red-700');
            favoritoBtn.classList.add('bg-black');
            favoritoBtn.textContent = 'Favorito';

            favoritoBtn.onclick = () => {
                console.log('click agregar'); // COMENTARIO
                agregarFavorito(pokemon);   
            }
        }

        
        
        // icorporar en el card
        cardBody.appendChild(nombreText);
        cardBody.appendChild(alturaText);
        cardBody.appendChild(pesoText);
        cardBody.appendChild(favoritoBtn); 

        cardPokemon.appendChild(imagenes);
        cardPokemon.appendChild(cardBody); 
              

        resultado.appendChild(cardPokemon);

        // limpiarHTML(paginacionDiv);

        // Imprimimos el paginador
        // imprimirPaginador();

    });
}

// agregrar favoritos
function agregarFavorito(pokemonFavorito) {
    // eleimanr 
    const favoritoBtn = document.querySelector(`#fav${pokemonFavorito.id}`);
    favoritoBtn.classList.remove('bg-black');
    favoritoBtn.classList.add('bg-red-700');
    favoritoBtn.textContent = 'Eliminar De Favorito';
    // agregar a lista
    const existe = listaPokemonsFavoritos.some(pokemonF => pokemonF.id === pokemonFavorito.id);

    if (!existe) {
        listaPokemonsFavoritos = [...listaPokemonsFavoritos, pokemonFavorito]; 
        // mensaje
        imprimirMensaje('Agregado a Favoritos', 'no', favoritoBtn);
    }
    

    // agregamos los elemtos en local storel
    agregarLocalStore();

    
    
    favoritoBtn.onclick = function() {
        console.log('click 2 Eliminar') // COMENTARIO
        elminarFavorito(pokemonFavorito);
    }

    
}

// eliminar de favoritos
function elminarFavorito(pokemonFavorito) {
     // eleimanr 
    const favoritoBtn = document.querySelector(`#fav${pokemonFavorito.id}`);
    favoritoBtn.classList.remove('bg-red-700');
    favoritoBtn.classList.add('bg-black');
    favoritoBtn.textContent = 'Favorito';

    const existe = listaPokemonsFavoritos.some(pokemonF => pokemonF.id === pokemonFavorito.id);

    if (existe) {
        listaPokemonsFavoritos = listaPokemonsFavoritos.filter(pokemon => pokemon.id !== pokemonFavorito.id);
        imprimirMensaje('Elimado de Favoritos', 'error', favoritoBtn);
    }
    // Actualizamos local storel
    agregarLocalStore();

    // reinicia la pagina de favoritos cada vez que elimine un elemento
    if (favoritos) {
        location.reload();
    }
    
    favoritoBtn.onclick = function() {
        console.log('click 2 agregar') // COMENTARIO
        agregarFavorito(pokemonFavorito);
    }
}

// agregar local store
function agregarLocalStore() {
    localStorage.setItem('pokemonFavoritos', JSON.stringify(listaPokemonsFavoritos));
}

// obtener los datos de favoritos
function obtenerFavoritos() {
  
    imprimirPikemons(listaPokemonsFavoritos);
}

// imprimir mensajes de alerta
function imprimirMensaje(mensaje, tipo, elemento) {

    // const existeMensaje = document.querySelector('.cardMensaje');

    // if (!existeMensaje) {
        const mensajeText = document.createElement('P');
        mensajeText.textContent = mensaje;
        mensajeText.classList.add('cardMensaje', 'p-3', 'mt-2', 'text-center', 'rounded', 'font-bold', 'mx-auto', 'mx-w-lg');
        if (tipo === 'error') {
            mensajeText.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            mensajeText.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        // clases al elemento
        elemento.classList.add('opacity-50', 'cursor-not-allowed');
        elemento.disabled = true;

        // traemos el elemento
        elemento.parentElement.parentElement.appendChild(mensajeText);

        setTimeout(() => {
            elemento.disabled = false;
            elemento.classList.remove('opacity-50', 'cursor-not-allowed');
            mensajeText.remove();
        },2000);
    // }
    

}


// PAGINADOR

// function imprimirPaginador() {

//     iterador = crearPaginador(totalPaginas);

//     // va registrar todoso los valores de yield
//     while (true) {
//         const {value, done} = iterador.next(); // value ===> son los registro del yield ;;; y   done ====> es si termino de ver los registros
//         console.log(done)
//         if (done) return; //  Esto quiere decir que si ya llegamos al final no se ejecute nada

//         // caso de que aun tenga registro, genera un boton por cada elemento 
//         const boton = document.createElement('A');
//         boton.href = '#';
//         boton.dataset.pagina = value;
//         boton.textContent = value;
//         boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-5', 'rounded');

//         // navegar por la paginacion
//         boton.onclick = () => {
//             paginaActual += 20;

//             // consula de nuevo la api
//             obtenerPokemons();
//         }

//         paginacionDiv.appendChild(boton);
//     }
// }


// limpiar html
function limpiarHTML(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}