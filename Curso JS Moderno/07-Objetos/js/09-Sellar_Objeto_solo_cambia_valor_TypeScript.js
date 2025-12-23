// para activar el modo estrico o sea que se tiene seguir al pie de la reglas para estructurar el codigo definir varibales como c++ o java

"use strict";

// cuando se active el modo stricto se activan una serie de metodos para los objetos

const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}


// con el objeto seal hace que el objeto sea sellado

// se puede modificar lo que existe en el objeto pero no se pueden ni eliminar ni agregar otros parametros de tipo llave

Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imgaen.jpg";

console.log(producto);

console.log(Object.isSealed(producto));