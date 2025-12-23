// modulos 

// es la segmentacion del codigo dividida por partes para la creacion de software especialmente en grupos ya que se divide las en tareas.

// Como sabemos cuando une los script en el html se mesclan variables las cuales no se pueden repetir. Esto conlleva a que hlla errores, para evitar estos errores a un metodo que se llama ifi, o una funcion que se ejecuta inmediatamente

// Funcion que se ejecuta inmediatamente

// Sive para que las variable no se mesclen





// IMPORTAR


// importar un elemento de otro archivo que no este en el html

// en react no necesita la extencion .xx del archivo pero aca si

// cuando son export default no van dentro de las {}

// la importacion q no este dentro de los {} debe ser solo una y se le puede colocar cualquier nombre
import nuevaFuncion, { nombreCliente2 as clienteX, saldo, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";

// IMPORTAR EMPRESA
import { Empresa } from "./empresa.js";

const cliente = {
    nombre : clienteX,
    saldo
}
console.log(cliente)


// Funcion de otro archivo
const cliente2 = mostrarInformacion(clienteX, saldo);

console.log(cliente2)

tieneSaldo(saldo)


// importamos Classe
const clienteClass = new Cliente(clienteX, saldo);

console.log(clienteClass.mostrarInformacion());


// instanciar clase importada
const empresa = new Empresa(clienteX, saldo, 'aseo');

console.log(empresa)

console.log(empresa.mostrarInformacion());


// llamado de export default
nuevaFuncion();