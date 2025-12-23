// .reduce

// Toma una gran cantidad de datos y unirlos y entregar un resultado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// supongamos que en este carrito de compras queremos decirle al usuario cunato tiene que pagar

// con un forEach

let total = 0;

carrito.forEach((producto) => total += producto.precio);

console.log(total);



// Con un .reduce

/* es una forma de sumar los valores numericos dentro de un array que contega objetos

arrayName.reduce((valor_inicial, valor_q_suma) => valor_inicial + valor_q_suma, numero_inicio);

    valor_incial ===> Es el que va contener la suma como un TOTAL este incia en 0 segun el "numero_inicio"

    valor_q_suma ===> es el valor dentro del arreglo esecificamos donde esta la variable de tipo numerico que hace referencia al precio

    valor_inicial + valor_q_suma ====> Es la operacion que se realiza

    numero_inicio ===> es el que se le asigna al valor_inicial desde ese valor es q empiza si es 0 empieza con cero pero si es 5 empieza con 5

*/

// El numero_inicio se le agrega al valor_inicial

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);