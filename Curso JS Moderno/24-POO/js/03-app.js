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


// Heredar
class Empresa extends Cliente {

    // constructor
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // rescribir un metodo para esto se nombra el mismo metodo de padre 
    static bienvenida() {
        return `Bienvenio al cajero d Empresas`;
    }
}

// instanciar una clase
const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo con Juan', 500, 3503360273, 'Sistemas');

console.log(Cliente.bienvenida())