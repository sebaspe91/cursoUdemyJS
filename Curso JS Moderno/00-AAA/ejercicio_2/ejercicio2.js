
const bt_calcular = document.querySelector('#bt-calcular');
const resultadoDiv = document.querySelector('#resultado'); 


// cramos una funcion donde se registran todos los eventos
listaEventos();

function listaEventos() {
    // evento boton calcular
    bt_calcular.addEventListener('click', calcularDescuento);

}


// funcion de calcular valores
function calcularDescuento(e) {
    // paramos el submit
    e.preventDefault();

    // limpias los elementos html en ese div
    limpiarHTML();

    // agregamos los valores html en estas constantes
    const kilo = document.querySelector('#km');
    
    // sacamos los valores y combertidos en numeros
    let kiloManzana = Number.parseFloat(kilo.value);


    // valida si es entero
    if (!Number.isInteger(kiloManzana)) {
        // enviamos un mensaje de error

        // retornamos al inicio
    }

    // efectuamos la operacion
    let precioVenta = 4200;
    let descuento = 0;
    let precioFinal = 0;

    // variable con el valor sin descuento
    let valorBruto = precioVenta * kiloManzana;

    if (kiloManzana < 0) {
        // mensaje de error
        descuento = 0;
        valorBruto = 0;
    } else if (kiloManzana > 0 && kiloManzana <= 2) {
        // sin descuento
        descuento = 0;
    } else if (kiloManzana > 2 && kiloManzana <= 5) {
        // descuento 10%
        descuento = valorBruto * 0.10;
    } else if (kiloManzana > 2 && kiloManzana <= 5) {
        // descuento 15%
        descuento = valorBruto * 0.15;
    } else {
        // descuento 20%
        descuento = valorBruto * 0.20;
    } 
    
    // preficio con descuento
    precioFinal = valorBruto - descuento;

    // enviamos el valor para mostrarlo
    motrarResultado(kiloManzana, valorBruto, descuento, precioFinal);

    // console.log(valorBruto.toFixed(2));
    
}

// funcion para mostrar los resultados
function motrarResultado(kiloManzana, valorBruto, descuento, precioFinal) {


    // limpiamos html
    limpiarHTML();
    
    // creamos un elemento html que se ingresa al DOM
    let divResultado = document.createElement('div');

    divResultado.innerHTML = `
        <p>
            La compra de ${kiloManzana.toFixed(2)} kilos tiene un valor de $${valorBruto.toFixed(2)}, pero tiene un descuento por valor de $${descuento.toFixed(2)}, por lo tanto, el valor a pagar es: $${precioFinal.toFixed(2)}
        </p>
    `;

    // agregamos al DOM
    resultadoDiv.appendChild(divResultado);
}


// Elimina los cursos del tbody para poder volver agregar los elementos
function limpiarHTML() {

    // con firstChild: se ejecuanto cuando por lo menos tenga un elemento adentro, cuando el codigo es limpiado ya no se ejecuta
    while(resultadoDiv.firstChild){
        resultadoDiv.removeChild(resultadoDiv.firstChild);
    }
}