// forma Dinamica

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('sebastian', 500);

// funcion que retorna el nombre
function formatearCliente(cliente){
    const {nombre, saldo} = cliente;

    return `El Cliente ${nombre} Pago $${saldo}`;
}


const clienteX = formatearCliente(juan);
console.log(clienteX)

// Objeto Dinamico 
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// funcion que retorna el nombre
function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;

    return `El Cliente ${nombre} saldo de $${saldo} y pertenece a la categoria ${categoria}`;
}


const CCJ = new Empresa('sebastian', 500, 'Curso en linea');

console.log(formatearEmpresa(CCJ));