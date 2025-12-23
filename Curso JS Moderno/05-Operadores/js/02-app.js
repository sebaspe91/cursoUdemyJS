
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Comparar si 2 numeros son iguales
console.log(numero1 == numero3);

// compara la cantidad si son iguales sin importar el tipo del dato arroja true si son 20 == "20"
console.log(numero1 == numero2);

// Para comparar si el tipo de datos es el mismo es
console.log(numero1 === numero2);

// se puede comvertir el tipo 
console.log(numero1 === parseInt(numero2));


// Compara si son diferentes

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);

console.log(numero1 != numero2);
// comparador estricto que verifica los tipos de datos
console.log(numero1 !== numero2);