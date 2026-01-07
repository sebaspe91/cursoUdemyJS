// Crear un tropotapy

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

// instanciar un objeto
const pedro = new Cliente('Pedro', 6000);

// usar un ProtoType
console.log(pedro.tipoCliente());
console.log(pedro.nombreCliente());

pedro.retiroSaldo(1000)
console.log(pedro.nombreCliente());

console.log(pedro)

// Nota: la diferencia de usar un function a un () => {} "Arrow function", es q la function busca en el objeto actual y el arrowFunction en la ventana global.... y para usar los this.  es necesario estar en el objeto actual

// Las funciones que se crean con Cliente.trototype.nameProto ===> son exclusivos para la funcion principal que va al inicio