// COMUNICAR FUNCIONES ENTRE SI

// Es la funcion que inicializa toda la aplicacion
iniciarApp();

function iniciarApp(){
    console.log('Iniciaiando app...');


    segundaFuncion();
}


function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pablo');
}



function usuarioAutenticado(user){
    console.log('Autenticando usuario....espere');
    console.log(`Usuario Autenticado exitosamente: ${user}`);
}
