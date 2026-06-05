// Hoisting

// termino en js para referirse a como funciona los contexto de ejecucion en javaScript

// Existen 2 fases 

    // Creacion: Se crean todas las variables y registran

    // Ejecucion: se ejecutan

// 

// ------------- Function Declareitions --------------

obtenerCliente('Juan'); // viendo las dos faces priemro declara todas las variables y despues las ejecuta por eso no arroja error este codigo

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// -------------- FIN Function Declarections -------------


// ---------- FUNCTION EXPREITION -----------------------

const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente2 es ${nombre}`);
}

obtenerCliente2('Sebastian'); // aca es obligatorio colocar primero la funcion y despues ingresales los valores ya q toma esta funcion como una variable