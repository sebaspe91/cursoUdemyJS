// SCOPE

// Es el alcance de una variable

// Es cuando se crea una variable y puede ser vista ya sea por una funcion o por un bloque de codigo

// Existen 2 tipos de scope 1) GLOBAL ; 2) o scope en una funcion o en un bloque de codigo

// scope es como la prioridad que tiene dentro de un bloque o si es global, si es dentro de un bloque o funcioon va tener mas prioridad q la global cuando se duplican las variables con el mismo nombre


// -------- EJEMPLO 1 -------------

// variable global fuera de cual quier bloque o funcion
const cliente = 'Juan';

function mostrarCliente() {
    console.log(cliente);
}

mostrarCliente(); 