// Que son los Design Patterns 

/**
 * Patrones de diseño:
 *  Son soluciones tipicas a problemas comunes en Desarrollo de Software, cada patron es como un plano que se puede personalizar para resolver un problema de diseño en el codigo
 * 
 * Beneficios:
 *  - Son Soluciones a problemas de diseño de codigo, si esta repitiendo mucho codigo hay un patron de diseño a resolver
 *  - Son soluciones probadas
 *  - Son soluciones conocidas por todos, y evitan la forma de escribir codigo "como cada quien entiende"
 * 
 * Categorias de Patrones:
 *  - De creacion: Permite crar objetos y permiten la reutilizacion del codigo
 *  - Estructura: Explican como deben comunicarse los objetos y clases en grandes proyecto
 *  - Comportamiento: Se enecargan de como se comportan y comunican los objetos
 */


// ----------------------- Patron de Diseños ---------------------------------

// --------------- Class pattern--------------------------------

/** 
 * Es utilizar clases para crear objetos
 */

// crear una clase
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'juan@juan.com');

console.log(persona);