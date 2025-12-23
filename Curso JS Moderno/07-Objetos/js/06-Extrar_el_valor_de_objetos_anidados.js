
const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true,
    informacion : {
        medidas : {
            peso : '1klg',
            medida : '1m'
        },
        fabricacion : {
            pais : 'China'
        }
    }
}

// console.log(producto);

// Para extraer de forma destroy
const {nombre, informacion: { fabricacion }, informacion : {medidas : {peso}} } = producto;

// El valor mas adentro es el nombre de la variable que le queda en la parte global en este caso peso

console.log(nombre);
console.log(fabricacion);
console.log(peso);