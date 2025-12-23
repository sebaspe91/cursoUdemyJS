// HERENCIA


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

// sin instanciar
// ya q es estatica se puede llamar sin instanciar
console.log(Cliente.bienvenida())

// instanciar una clase
const juan = new Cliente('Juan', 400);