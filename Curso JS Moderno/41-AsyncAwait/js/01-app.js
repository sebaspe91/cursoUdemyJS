
/**
 * try y catch : es una forma de evitar para el programa si hay un error y arrojar un mensaje para saber que esta fallando 
 * 
 * se debe de utilizar en partes criticas de la organizacion como:
 *  - Conectar a una base de datos
 *  - Consumir una APPI
 *  - Autenticar un usuario
 *  - o Acciones que en caso de que falle nuestra app pueda seguir funcionando y nos arroje un mensaje de error
 */


console.log(2+3);

try {
    autenticarUsuario(); // error probocado
} catch (error) {
    console.log(error);
}

// continua con el codigo
console.log(5+8);