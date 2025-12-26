// prototipos 

// El proto es un contenedor de funciones que son exclusivas para paginas especificas

// puede acceder, eliminay y agregar funciones a el

// se puede crear dos formas de objetos 1. estatica y otra dinamica, era uns forma antigua de crer clases
// Puede crear multiples instancias de diferentes clientes o multiples objetos 

// forma antigua

const producto = {
    nombre : 'juan',
    precio : 300
}

console.log(producto)


// forma Dinamica

function ObjetProducto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const juan = new ObjetProducto('sebastian', 500);

console.log(juan)