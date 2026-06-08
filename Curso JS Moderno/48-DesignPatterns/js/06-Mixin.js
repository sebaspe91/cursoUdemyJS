// ----------------- Mixin -----------------------------

/**
 * Es una forma de agregar funciones a una clase una vez ya ha sido creada
 */

// crear una clase
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// se crea una funcion para comparatir entre diferentes clases
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Nombre Persona: ${this.nombre}`);
    },
    mostrarEmail() {
        console.log(`Email: ${this.email}`);
    }
}

// AÑADIR funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);

// agreagr metodos a la segunda clase
Object.assign(Cliente.prototype, funcionesPersona);


// Instanciar
const cliente = new Persona('Juan', 'correo@correo.com');
console.log(cliente);

cliente.mostrarInformacion();
cliente.mostrarNombre();
cliente.mostrarEmail();

// segunda clase
const cliente2 = new Cliente('Juan2', 'correo2@correo.com');
console.log(cliente2);

cliente2.mostrarInformacion();
cliente2.mostrarNombre();
cliente2.mostrarEmail();

