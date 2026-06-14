//  TESTING

/**
 * VENTAJAS:
    * - Mejora la calidad del software evitando Bugs
    * - Probar diferentes escenarios puede ser complicado o tardado, pero hay herrameintas que automatizan las pruebas de nuestros proyectos (Jest y Cypress)
    * - Liberar nuevas versiones sin las preocupaciones de que algo salga mal.

 CONSIDERACIONES:
    - ¿Cuantas veces has agregado nuevas funciones a un proyecto existente pero desconoces si funciona bien con lo existente?
    - Tener pruebas hará que una persona que no ha mantenido un proyecto conozc que es lo que hace cada parte.
    - No haras pruebas de todo, mas bien de como se integran diferentes partes de la aplicacion

 DIFERENETES TIPOS DE TESTING:
    - End to End -> Mas interactivo, simula algunos clicks, llenar formularios y asegurarse de que se muestre en pantalla lo que se desea. (cypress)
    - Integración -> Revisa qie multiples partes de nuestro proyecto funcionen bien (Jest)
    - Unit -> Revisar que cada parte por si sola funcione bien
    - Static -> Revisar por errores en el codigo mientras vas escribiendo

 HERRAMIENTAS PARA TESTING:
    - Cada tecnologia tiene sus herramientas para Testing, pero una muy popular es Jest, hay veriosnes para VueJS, Angular, TypeScript, Node, React, etc. Es necesario tener instalado Node.js.
    - Cypress: es una herramienta para hacer testings End to End
 */


//  Ejemplo 

// probar 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// validaro de testing
function validarTesting(resultado, valorEsperado) {
    if (resultado !== valorEsperado) {
        console.error(`El ${resultado} es diferente a lo esperados; La prueba no paso`);
    } else {
        console.log('La prueba paso correctamente');
    }
}

let resultado = suma(1, 2);
let valorEsperado = 3; // es el valor esperado de la funcion, esto es un testing manual
validarTesting(resultado, valorEsperado);

let resultadoResta = restar(1, 2);
let valorEsperadoResta = 3;
validarTesting(resultadoResta, valorEsperadoResta);

