// PROPIEDADES PRIVADAS

class Cliente {

    // para colocar una propiedad privada #nameVariable
    #nombre;

    // constructor de la clase
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    // metodos

    // set y get
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }


    mostrarInformacion() {
        return `Cliente: ${this.#nombre} y saldo: ${this.saldo}`;
    }

    // metodos estaticos

    // Estas clases se pueden utilizar sin necesidad de instanciar
    static bienvenida() {
        return `Bienvenio al cajero`;
    }
}

// instanciar una clase
const juan = new Cliente('Juan', 400);

console.log(juan);

juan.setNombre('pedro');

console.log(juan)
console.log(juan.getNombre())