// ------------------ Constructo Pattern -----------------------

/**
 * Existe una clase base que es la clase padre para que las demas clases hereden sobre esa clase base
 */


// crear una clase PADRE
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Crear clase hijo
class Cliente extends Persona {
    constructor(nombre, email, tipoCliente) {
        super(nombre, email);
        this.tipoCliente = tipoCliente;
    }
}

const cliente = new Cliente('Sebastian', 'Seb@correo.com', 'Preferencial');

console.log(cliente);