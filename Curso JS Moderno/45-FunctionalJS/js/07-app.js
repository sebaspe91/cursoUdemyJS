
// FUNCIONES QUE RETORNAN OTRA FUNCION

const obtenerCliente = () => () => console.log("Juan Perez"); // como es una funcion que retorna otra funcion van doble parentesis () => () => ...

const fn = obtenerCliente(); // este hace parte al primer parentesis

fn(); // este hace parte al segundo parentesis