// iteradores

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

// orden de compra se valida q no halla valores repetidos
const ordenes = new Set([123, 231, 131, 102]);

// creamos un contenedor con los valores de nombre y profesion
const datos = new Map();

// agregamos la llave y el valor
datos.set('nombre', 'Juan');
datos.set('Profesion', 'Desarrollador Web');

// Iteradores

// iterador ENTRY  .entries()     retona: llave y valor

console.log('\nENTRY____retona: llave y valor\n\n');

for(let entry of ciudades.entries()){
    console.log(entry);
}

for(let entry of ordenes.entries()){
    console.log(entry);
}

for(let entry of datos.entries()){
    console.log(entry);
}

// .entries() = arregla una llave si no existe o imprime llave y valor



// Values interador            retona: valor

console.log('\nValues______retona: valor\n\n');

for(let value of ciudades.values()){
    console.log(value);
}

for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}



// ITERADOR keys     retona: llave

console.log('\nkeys______ retona: llave\n\n');

for(let key of ciudades.keys()){
    console.log(key);
}

for(let key of ordenes.keys()){
    console.log(key);
}

for(let key of datos.keys()){
    console.log(key);
}



// iterador por Default

console.log('\nDefault\n\n')

for (let ciudad of ciudades) {
    console.log(ciudad)
}

for (let orden of ordenes) {
    console.log(orden)
}

for (let dato of datos) {
    console.log(dato)
}