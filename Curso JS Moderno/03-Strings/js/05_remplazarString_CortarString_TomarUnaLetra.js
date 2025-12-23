

// Remplazar una palabra por otra

// Cuando el cliente pide realizar un cambio que en vez que muestre la palabra pulgadas salga el signo " que representa las pulgadas, se tendira que cambiar todos los datos de la base de datos con el metodo 

// "StringVar.replace('valor_cambiar', 'nuevo_valor');"

const producto = 'Monitor 20 pulgadas';

console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));



// CORTAR una cadena de texto

// Cuando queramos cortar un trozo de la cadena de texto del usuario se hace por medio del metodo

// .slice(pocisionInicio, pocisionFinial);

// las posicionInicial es donde empeiza cortar en el index de la cadena y la final es hasta donde va terminar

// desde el indice 0 hasta el indice 10 
console.log(producto.slice(0, 10));
// desde el indice 8 hasta indice final  
console.log(producto.slice(8));
// error no lo ejecuta
console.log(producto.slice(2, 1));


// hay una alternativa a slice es el .substring(2, 1)

// con este metodo puede colocar el indice mayor de primera posicion y el mas pequeño de segunda
console.log(producto.substring(2, 1));

// Tomar la primera letra o una sola letrra
const usuario = "Juan";

console.log(usuario.charAt(0));
