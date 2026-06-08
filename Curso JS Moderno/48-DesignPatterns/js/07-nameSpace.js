// ---------------- nameSpace ----------------------

/**
 * Ayuda evitar colision de nombres en el area global de javaScript,
 * 
 * La idea de este metodo es: Crear un objeto global al rededor de tu aplicacion y agregar todas las funciones dentro en lugar de crear multiples funciones y objetos que se puedan acceder de forma global
 */

// Se crea un objeto vacio en la global
const restauranteApp = {}; // se le dice nameSpace porque sobre este objeto se colocan todas las funciones, arreglos y datos que se van a ejecutar en el codigo

restauranteApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restauranteApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro menú`);

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo}, $${platillo.precio}`);
        });
    },
    // segunda funcion
    ordenar: id => {
        console.log(`Tu platillo: ${restauranteApp.platillos[id].platillo} se esta preparando`);
    },
    // funcioon para agregar el pedido
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }

        restauranteApp.platillos.push(nuevo);
    }
}


// llamar la funcion
restauranteApp.funciones.ordenar(1);
restauranteApp.funciones.agregarPlatillo('Taco', 20);

const {platillos} = restauranteApp;
restauranteApp.funciones.mostrarMenu(platillos);