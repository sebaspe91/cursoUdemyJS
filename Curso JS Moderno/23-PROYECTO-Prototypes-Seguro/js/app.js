// pyoyecto 

// Constructores

// creamos los objetos para la policia
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
    /*
        valor de la cotizacion por marca 
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    // variables 
    let cantidad;
    const base = 2000;

    // console.log(this.marca)

   switch (this.marca) {
    case '1':
            cantidad = base * 1.15;
        break;
   
    case '2':
           cantidad = base * 1.05;
        break;
   
    case '3':
            cantidad = base * 1.35;
        break;
   
    default:
        cantidad = 0;
        break;
   }


    // leer el año

    // cada año que la diferencia es mayor, el costo va a reducirse un 3%
    const diferencia = new Date().getFullYear() - this.year;

    // formula para calcular la nueva cantidad
    cantidad -= ((diferencia * 3) * cantidad) /100;

    // Tipo de poliza
    /*
        si el seguro es basico se multiplica por 30% mas
        si el seguro es completo se multiplica por 50% mas
    */
   if(this.tipo === 'basico'){
        cantidad *= 1.30;
   } else {
        cantidad *= 1.50;
   }

   return cantidad;
}

// creamos otro constructor de objetos q va manejar la interfaz de usuario.
// Como maneja la interfaz va vacio, se crea porque le tenemos que incorporar protoTypes 
function UI() {}

// PROTOTYPES

// creamos los protoTypes de la UI "interfaz usuario"

// llena las opciones de los años el select
UI.prototype.llenarOpciones = () => {
    // seleccionamos el año actual
    const max = new Date().getFullYear(),
          min = max - 20;

    // creamos el html 
    const selectYear = document.querySelector('#year');

    for(let i=max; i>=min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }

}

// Muestra alertas en pantallas
UI.prototype.mostrarMensajes = (mensaje, tipoAlerta) => {

    const div = document.createElement('div');
    div.textContent = mensaje;
    div.classList.add('mensaje', 'mt-10');
    
    // como se recibe diferentes tipos de alerta error y correcto
    if(tipoAlerta === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    // insertar en el html
    const formulario = document.querySelector('#cotizar-seguro');
    // insertBefore = inserta como argumentos el nuevo nodo y el nodo de referencia
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}


// mostrar resultado
UI.prototype.mostrarResultado = (seguro, total) => {

    const {marca, year, tipo} = seguro;

    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
    
        case '2':
            textoMarca = 'Asiatico';
            break;
    
        case '3':
            textoMarca = 'Europeo';
            break;
    
        default:
            break;
    }
    
    // creamos el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    // textConter cuando no tiene html y innerHTML cusndo se debe de agregar elementos html
    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    // creamos ese valor en el contenedor de resultados
    const resultadoDiv = document.querySelector('#resultado');
    

    // mostramos el spinner cargando...
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        // muestra el total
        resultadoDiv.appendChild(div);
    }, 3000);
}



// Intanciamos la Funcion UI
const ui = new UI();

// console.log(ui)


document.addEventListener('DOMContentLoaded', () => {
    // llama la funcion de prototipos
    ui.llenarOpciones(); // llena el select con los años
});


// Funciones 

// llamamos eventos
eventListener();

function eventListener() {
    // para validar el formulario
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}


// Cotizar Seguro
function cotizarSeguro(e){
    e.preventDefault();

    // desde aca sin AYUDAAAAAA

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // leer el año seleccionado
    const year = document.querySelector('#year').value;

    // leer el tipo de cobertura
    // la forma input[name="tipo":checked]  toma el valor seleccionado
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Si hay algun elemento vacio muestra el msm de error
    if(marca==='' || year==='' || tipo===''){
        ui.mostrarMensajes('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensajes('Cargando Datos', 'exito');

    // borramos los mensajes totales existentes

    // cuando se seleccione los div q creamos para mostrar el total la primera vez nos arroja null ya q no existe con esto validamos q si esc diferente a null se borre lo q se haya creado
    const resultado = document.querySelector('#resultado div');
    if(resultado != null){
        resultado.remove();
    }

    // instanciando el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();


    // Utilizar el prototype que va a cotizar
    ui.mostrarResultado(seguro, total);
}

