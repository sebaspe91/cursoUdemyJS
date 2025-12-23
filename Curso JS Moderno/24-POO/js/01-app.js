// programacion orientada a objeto

// forma 1 mas usada, Definicion de la clase "Class Declareitions"
class Cliente {

    // constructor de la clase
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // metodos
    mostrarInformacion() {
        return `Cliente: ${this.nombre} y saldo: ${this.saldo}`;
    }

    // metodos estaticos

    // Estas clases se pueden utilizar sin necesidad de instanciar
    static bienvenida() {
        return `Bienvenio al cajero`;
    }
}

// Forma 2 class Expreision
const Cliente2 = class {
     // constructor de la clase
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // metodos
    mostrarInformacion() {
        return `Cliente2: ${this.nombre} y saldo: ${this.saldo}`;
    }
}


// sin instanciar
// ya q es estatica se puede llamar sin instanciar
console.log(Cliente.bienvenida())

// instanciar una clase
const juan = new Cliente('Juan', 400);
const juan2 = new Cliente2('Juan', 400);

// llamado de los metodos

console.log(juan.mostrarInformacion())
console.log(juan)
console.log(juan2.mostrarInformacion())
console.log(juan2)