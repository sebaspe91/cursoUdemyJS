// Herencia

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Crear un ProtoType

// Esto es para que la funcion Cliente pueda llamar solo la funcion tipo cliente

// nameFuncion.prototype.nombrePrototype = function() {}

Cliente.prototype.tipoCliente = function() {
    // console.log(this.saldo)
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platino';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

// creamos otro prototype
Cliente.prototype.nombreCliente = function() {
    return `El nombre del cliente es ${this.nombre}, su saldo es ${this.saldo} y tipo de cliente: ${this.tipoCliente()}`;
}

// prototipo retiro de cajero
Cliente.prototype.retiroSaldo = function(retiro) {

    if(this.saldo > 0 && retiro <= this.saldo){
        this.saldo -= retiro;
    } else {
        console.log('Saldo insuficiente');
    }
}

// Creamos otro objeto dinamico

// Se hereda llamando la funcion con .call(this, argomrntos)
function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Para pasar el prototipo de cliente a persona HEREDAR funciones se debe de hacer de instanciar un objeto
Persona.prototype = Object.create(Cliente.prototype);

// para Heredar el constructor
Persona.prototype.constructor = Cliente;

const juan = new Persona('Juan', 5000, 3503360273);
console.log(juan)
console.log(juan.nombreCliente())

// crear un prototipe para el telefono
Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(juan.mostrarTelefono())