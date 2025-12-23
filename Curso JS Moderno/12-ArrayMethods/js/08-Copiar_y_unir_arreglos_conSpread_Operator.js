


/*

NOTA: Este metodo de Spread Operator ===> copia todo los datos nuevos en un nuevo arreglo sin alterar el original

*/ 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Spread Operator

// Como agregar un elelemento al final del arreglo meses

// Esta forma es muy util por que evita modificar al arreglo original y es util para que el codigo esa funcional 

// crea un nuevo arreglo con los valores modificados y con ese se trabaja



//  Para agregar un valor al FINAL del nuevo arreglo
const meses1 = [...meses, 'Agosto'];
console.log(meses1);


//  Para agregar un valor al INICIO y al FINAL del nuevo arreglo
const meses2 = ['Inicio', ...meses, 'Agosto'];
console.log(meses2);

// ---- OBJETOS ------

const producto = {

    nombre : 'Disco Duro', 
    precio : 300

};

// aca en la parte del [...carrito, producto] No se coloca los ... ya que arroja error solo el arreglo
const carrito2 = [...carrito, producto];

console.log(carrito2);


/**
 * NOTA:
 *  Copia el carrito original "...carrito", en el nuevo arreglo carrito2 y le agrega el nuevo producto 
 */