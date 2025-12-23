// NOTA: Existen unas funciones que pueden ver en la consola con el comando Math

// para accionar este objeto se hace con doble enter 

// en este objeto se puede llamar para concoer el maximo o el minimo o el medio


// MATH

let resultado;

// PI
resultado = Math.PI;

// redondear 
resultado = Math.round(2.8);

// redondear hacia arriba
resultado = Math.ceil(2.1);

// redondear hacia abajo
resultado = Math.floor(2.9);


// Raiz Cuadrada
resultado = Math.sqrt(144);

// Valor absoluto
resultado = Math.abs(-500);

// Potencia
resultado = Math.pow(2,4);

// Minimo
resultado = Math.min(3,5,-2,1);

// maximo
resultado = Math.max(3,5,2,1);

// aleatorio
// este aleatorio da numero decimales casi no tira enteros
resultado = Math.random(); // se puede poner un rango con el *30


// Aleatrio dentro de un rango
resultado =  Math.floor(Math.random()*30);



console.log(resultado);