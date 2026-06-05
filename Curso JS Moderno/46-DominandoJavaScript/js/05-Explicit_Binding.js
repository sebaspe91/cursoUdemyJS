// Explicit_Binding

// se da por explicito donde encontrar el valor dentro de funciones o clases es con 3 funciones 1) call; 2) apply ; 3) bind


function personal(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`)
}


const informacion = {
    nombre : 'Juan'
}

const musicaFavorita = ['Hevy Metal', 'Rock'];


// ----------------- Call -----------------------------------------------
    // Existe en casi todas las fucniones de js incluso en las que creamos 

// usar el call
personal.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// --------------------- FIN Call -------------------------------




// ---------------------- apply -----------------------------

personal.apply(informacion, musicaFavorita);

// -------------------- FIN apply --------------------------------


// --------------- bind ------------------------------

 /** es similar a call debe pasa los elementos individuales pero esta crea una nueva funcion */

const nuevaFuncion = personal.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFuncion();

// ---------------------- Fin bind --------------------------------