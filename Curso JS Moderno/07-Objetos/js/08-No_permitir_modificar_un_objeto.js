
// para activar el modo estrico o sea que se tiene seguir al pie de la reglas para estructurar el codigo definir varibales como c++ o java

"use strict"; // typScript libreria trae mas metodos para usar como.freeze

// cuando se active el modo stricto se activan una serie de metodos para los objetos

const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}


// con el objeto freeze hace que el objeto no sea modificado

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imgaen.jpg";

console.log(Object.isFrozen(producto));
