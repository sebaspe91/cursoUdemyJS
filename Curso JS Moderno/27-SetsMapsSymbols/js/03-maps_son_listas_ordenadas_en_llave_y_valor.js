// Map

// Son listas ordenadas en llave y valor - es como un objeto con una sola propíedad es decir, una llave y un valor

// La llave y valor pueden ser cualquier tipo de dato puede ser un arreglo o un numero etc.. 

// Estan diseñados para: - agregar, quitar o recorrer elementos, cuando son muy grandes tiene mucho mejor performan que un objeto

// instanciamos
const cliente = new Map();

// Agregar una llave y valor
cliente.set('nombre', 'valor');
cliente.set('tipo', 'Primium');
cliente.set('saldo', 3000);

// tamaño del objeto Map.size
let longitud = cliente.size;
console.log(longitud)

// buscar una llave solo busca llaves
const encontrado = cliente.has('tipo');
console.log(encontrado)

// obtener un valor
const valorX = cliente.get('tipo');
console.log(valorX)

// eliminar
cliente.delete('tipo');

// limpiar todo el Map
// cliente.clear();

console.log(cliente)


// Puede crear llaves y valores en listas dentro de otra lista

// me sirven con las bases de datos para mostrar o unir los datos en llave y valor

// Esto es para el constructor de la class Map
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

// asignar valor
paciente.set('dr.', 'Dr. Asignado')

console.log(paciente.size);
console.log(paciente.has('nombre'));
console.log(paciente.get('nombre'));

// reescrbir un valor
paciente.set('nombre', 'Antonio');

// Es iterable
paciente.forEach((datos, index) => {
    console.log(index, '----->', datos)
});

// console.log(paciente.delete('nombre'));

// paciente.clear();

console.log(paciente)