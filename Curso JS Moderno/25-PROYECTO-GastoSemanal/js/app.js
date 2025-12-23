// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos

eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    // validar inputs de formulario
    formulario.addEventListener('submit', agregarGasto);

}


// Clases

// NOTA: siempre es bueno parar para ver cuantas clases y funciones necesita, para este proyecto se ve q necesita dos clases.
// 1) para manejar el presupuesto "operaciones"
// 2) para manejar la interfaz de usuario. "UI"

// presupuesto
class Presupuesto {
    // como es de presupuesto debe de tener el total y el restante
    constructor(presupuesto){

        // cambia cualquier string en numero si no se puede si contiene alguna letra arroja NaN
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];

    }

    // Metodo

    // nuevo gasto
    nuevoGasto(gasto){
        
        this.gastos = [...this.gastos, gasto];
        
        // se llamaa el metodo calcularRestante
        this.calcularRestante();
    }

    // calcula el restante del presupuesto
    calcularRestante(){
        // .reduce(), itera sobre un arreglo y va calculando la suma de los elementos indicados, toma 2 argumentos necesarios 
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);

        // se saca el restante
        this.restante = this.presupuesto - gastado;

    }

    // elimina un gasto
    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        // se calcula el restante de nuevo
        this.calcularRestante();
    }
}

// Interfaz de Usuario
class UI {

    // metodos 

    // inserta el total a la pagina web
    insertarPresupuesto(cantidad){

        // se extrae los valores del objeto presupuesto
        const {presupuesto, restante} = cantidad;

        // seleccionamos donde vamod agregar ese valor y lo plasmamos en la pagina web de una vez
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    // imprimir alertas
    imprimirAlerta(mensaje, tipoMensaje){

        // creamos el div
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center', 'alert');

        // condicion para mostrar el tipo de alerta
        if(tipoMensaje === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // agregamos el div en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        },3000);
    }

    // agregamos listado de los gastos
    mostrarGastos(gastos){

        // limpiar html, se usa this. porque se llamna dentro de la clase
        this.limpiarHTML();

        // iterar sobre los gastos}
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            // creamos etiqueta li
            const nuevoGasto = document.createElement('li');
            // agrega bastantes clases a la vez
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            
            // Agregamos el atributo id al html
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `
                ${nombre} 
                <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;

            // boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.type = "button";
            btnBorrar.innerHTML = 'Borrar &times';

            // borrar un elemento de la lista de gastos
            btnBorrar.onclick = () => {

                eliminarGasto(id);

            };

            nuevoGasto.appendChild(btnBorrar);

            // Agregar el HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    // limpiar HTML
    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    // actualizar restante
    actualizarRestante(restante){
        // agregamos el restante al html
        document.querySelector('#restante').textContent = restante;
    }

    // comprueba un presupuesto 
    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;

        // seleccionamos el camopo de restante
        const restanteDiv = document.querySelector('.restante');

        // comprobar si han gastado mas del 75%
        if( (presupuesto / 4) > restante ){

            // cambia los stilos de verde a rojo
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.remove('alert-warning');
            restanteDiv.classList.add('alert-danger');
            
        } else if( (presupuesto / 2) > restante ) {

            // cambia los stilos de verde a rojo
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.remove('alert-danger');
            restanteDiv.classList.add('alert-warning');

        } else if ( (presupuesto / 4) < restante ){

            // cambia los stilos de verde a rojo
            restanteDiv.classList.remove('alert-danger');
            restanteDiv.classList.remove('alert-warning');
            restanteDiv.classList.add('alert-success');
            formulario.querySelector('button[type="submit"]').classList.remove('btn-danger');
            formulario.querySelector('button[type="submit"]').classList.add('btn-primary');

        }

        // cuando se agota a 0 el presupuesto 
        if(restante <= 0) {
            ui.imprimirAlerta('Se agoto el presupuesto', 'error');
            formulario.querySelector('button[type="submit"]').classList.remove('btn-primary');
            formulario.querySelector('button[type="submit"]').classList.add('btn-danger');
        }
    }
}


// instanciar UI de forma global
const ui = new UI();

// se define una variable global para usarla en otras funciones
let presupuesto;

// Funciones

function preguntarPresupuesto(){
    // abre una ventana emergente preguntando un valor
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // cambia cualquier string en numero si no se puede si contiene alguna letra arroja NaN
    // Number(presupuestoUsuario);

    // console.log(presupuestoUsuario);

    // isNaN(valida si el string q agrego el usuario no se puede convertir en numero si no se puede convertir = true)
    if(presupuestoUsuario === '' || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        // recargamos la pagina para q vuelva a preguntar
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}



// agregar gastos
function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){

        // llamamos el metodo de imprimir alerts
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;

    } else if(cantidad <= 0 || isNaN(cantidad)){

        ui.imprimirAlerta('Cantidad No valida', 'error');
        return;

    }

    // generar un objeto con el gasto

    // se hace de forma q nombre y cantidad se unan al nuevo objeto
    // id: Date.now() es para agregar los segundos 
    const gasto = {
        nombre, 
        cantidad, 
        id: Date.now()
    };

    // enviamos el nuevo gasto para agregarlo a la lista
    presupuesto.nuevoGasto(gasto);

    // mostrar mensaje
    ui.imprimirAlerta('Gasto Agregado Correctamente');

    // imprimir los gastos
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    // actualizamos el restante
    ui.actualizarRestante(restante);

    // comprobar el presupuesto se pasa todo el objeto ya q se necestia su valor
    ui.comprobarPresupuesto(presupuesto);

    // formatear el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);

    // elimina los gastos del html
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    
    // actualizamos el restante
    ui.actualizarRestante(restante);

    // comprobar el presupuesto se pasa todo el objeto ya q se necestia su valor
    ui.comprobarPresupuesto(presupuesto);
}