// variables constantes no tienen cambios y contien toda la estructura o informacion del archivo HTML donde se encuentra el id, el id se identifica con un # ---> #bt-calcular

// querySelector('#bt-calcular'); ----> funcion de JavaScript para tomar la estructura HTML
const bt_calcular = document.querySelector('#bt-calcular');
const resultadoDiv = document.querySelector('#resultado'); 


// cramos una funcion donde se registran todos los eventos
listaEventos();

function listaEventos() {
    // evento boton calcular
    bt_calcular.addEventListener('click', calcularCapitalizacion);

}



// funcion de calcular valores
function calcularCapitalizacion(e) {
    // paramos el sistema
    e.preventDefault();

    // limpias los elementos html en ese div
    limpiarHTML();

    // agregamos los valores html en estas constantes
    const cuota = document.querySelector('#cantidad');
    const años = document.querySelector('#años');
    
    // sacamos los valores y combertidos en numeros
    let valorPresente = Number.parseFloat(cuota.value);
    let peridoMeses = Number.parseInt(años.value);

    peridoMeses = peridoMeses * 12;

    // valida cuaota inicial 
    if (valorPresente < 0 || (peridoMeses < 1 && peridoMeses > 60)) {
        // enviamos un mensaje de error

        // retornamos al inicio
    }

    // valida si es entero
    if (!Number.isInteger(peridoMeses)) {
        // enviamos un mensaje de error

        // retornamos al inicio
    }

    // efectuamos la operacion
    let inteses = 1 + 0.02;
    let valorFuturo = valorPresente * Math.pow(inteses,peridoMeses);
    

    // enviamos el valor para mostrarlo
    motrarResultado(valorPresente, valorFuturo, peridoMeses);

    // console.log(valorFuturo.toFixed(2));
    
}

// funcion para mostrar los resultados
function motrarResultado(valorPresente, valorFuturo, peridoMeses) {

    // convertir a años
    años = peridoMeses/12;
    // limpiamos html
    limpiarHTML();

    // creamos un elemento html que se ingresa al DOM
    let divResultado = document.createElement('div');

    divResultado.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Valor Consignado</th>
                    <th>Valor futuro en ${años} años</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${valorPresente.toFixed(2)}</td>
                    <td>${valorFuturo.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
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