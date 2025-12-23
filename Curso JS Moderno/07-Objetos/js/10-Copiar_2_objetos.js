
// Copiar dos objetos

// Objeto 1
const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

// Objeto 2
const medidas = {
    peso : '1kg',
    medida : '1m'
}


console.log(producto);
console.log(medidas);

// Para unir ambos objetos

const resultado = Object.assign(producto, medidas);

console.log(resultado);


// otra forma como Spread Operator o Rest Operator (...objeto1, ...objeto2);
const resultado2 = {...producto, ...medidas};

console.log(resultado2);