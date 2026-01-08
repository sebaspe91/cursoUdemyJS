// Symbol

// Permite crear una propiedad unica, no hay dos simbols que sean iguales

const sym1 = Symbol();
const sym2 = Symbol();

if (sym1 === sym2) {
    console.log('Son iguales');
} else {
    console.log('son Diferentes')
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellidos de type Symbol como llaves de un objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Perez';
persona.tipoCliente = 'Premium';
persona.saldo = 200;

console.log(persona)

// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');

// objeto contenedor
const cliente = {};

// agregar
cliente[nombreCliente] = 'Pedro';

// objeto
console.log(cliente)

// valor
console.log(cliente[nombreCliente])

// descripcion
console.log(nombreCliente)