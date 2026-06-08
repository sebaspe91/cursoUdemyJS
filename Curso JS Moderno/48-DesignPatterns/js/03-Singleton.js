// ----------------------- Singleton ---------------------------

/**
 * No permite crear multiples instancias de una misma clase base, encambio siempre se va retornar el objeto instanciado
 * 
 * En algunos casos es bastante util tener un objeto con toda la informacion para no estar crean multiples instancias
 */

// PASO A PASO PARA SINGLETON

/**
 * 
 */

//  creamos variable con la instancia null
let instancia = null; // una vez que se instancie se llena esta variable con sierta infimacion


// crear una clase PADRE
class Persona {
    constructor(nombre, email) {
        // Instanciar por metodo singleton
        if (!instancia) { // si instancia no tiene nada agrega la nueva instancia 
            this.nombre = nombre;
            this.email = email;
            instancia = this; // llena la variable con el nombre y el email
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Juan', 'juan@juan.com');
console.log(persona);

const persona2 = new Persona('Lore', 'lore@lore.com');
console.log(persona2);