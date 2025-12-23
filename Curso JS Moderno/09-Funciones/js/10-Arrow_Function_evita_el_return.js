
const aprendiendo = function() {
    console.log(`Aprendiendo JavaScript`);
}


// Arrow Function
const aprendiendo2 = () => {
    console.log(`Aprendiendo JavaScript`);
}


// con esta funcion no es necesario de colocar el return
const aprendiendo3 = () => 'Sigo Aprendiendo en JS';

aprendiendo2();
ressult = aprendiendo3();

console.log(ressult);

// ejemplo mio
const sumar = (n1, n2) => n1 + n2;

let suma = sumar(8, 7);

console.log(suma);