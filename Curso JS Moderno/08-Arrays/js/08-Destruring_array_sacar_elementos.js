

const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto);


const { nombre } = producto;

console.log(nombre);

// Destructuring con Arreglos

const numero = [10, 20, 30, 40, 50];

// aplicamos el destructuring

// primero es la variable que va guardar por defecto el primer valor del arreglo
// const [primero, segundo, t3] = numero;

// si no requeremos otro valor

// se coloca las comas para decir que no queremos ese valor 
const [, , p3] = numero;

console.log(p3);


// Si queremo que otros valores esten dentro de un arreglo
const [primero, , ...tercero_array] = numero;

console.log(tercero_array);