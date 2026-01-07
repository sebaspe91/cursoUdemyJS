
// traer los elementos

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// Eventos

// llamar los eventos

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}



// Clases

// clase de presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    // metodos
    nuevoGasto(gasto) {
        // agregar gastos
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    
    calcularRestante() {
        // calcular el presupuesto
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);

        // agregamos al campo restante
        this.restante = this.presupuesto - gastado;
    }

    // eliminar gastos
    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
    
}

// clase para manipular la interfaz
class UI {

    // metodo 
    insertarPresupuesto(cantidad) {
        // extraemos los valores
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirMensaje(mensaje, tipoMensaje) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.classList.add('text-center', 'alert');
        if (tipoMensaje === 'error') {
            mensajeDiv.classList.add('alert-danger');
        } else {
            mensajeDiv.classList.add('alert-success');
        }

        document.querySelector('section').appendChild(mensajeDiv);

        // borrar el mensaje
        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);

    }

    // agregar los gstos al listado
    agregarGastoListado(gastos) {
        // limpiar el html
        this.limpiarHTML();

        // crear el html
        gastos.forEach(gasto => {
            const {nombre, cantidad, id} = gasto;
            
            // Creamos una lista
            const gastoLi = document.createElement('li');

            // agregamos bastantes clases
            gastoLi.className = 'list-group-item d-flex justify-content-between align-items-center';

            // agregamos el id al elemento li
            gastoLi.dataset.id = id;

            // creamos la estructura dentro de gastoLi
            gastoLi.innerHTML = `
                ${nombre}
                <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.type = 'button';
            btnBorrar.innerHTML = 'Borrar &times';

            // Agregar boton
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            };

            gastoLi.appendChild(btnBorrar);

            // agregamos el elemento en el HTML
            gastoListado.appendChild(gastoLi);

        });
    }

    // limpiar html
    limpiarHTML() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    // actualizar el restante
    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('#restante');

        if ((presupuesto / 4) > restante) {

            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.remove('alert-warning');
            restanteDiv.classList.add('alert-danger');

        } else if ((presupuesto / 2) > restante) {

            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.remove('alert-danger');
            restanteDiv.classList.add('alert-warning');

        } else if ((presupuesto / 4) < restante) {

            restanteDiv.classList.remove('alert-danger');
            restanteDiv.classList.remove('alert-warning');
            restanteDiv.classList.add('alert-success');
            formulario.querySelector('button[type="submit"]').classList.remove('btn-danger');
            formulario.querySelector('button[type="submit"]').classList.add('btn-primary');

        }

        // cuando se agota a 0 el presupuesto 
        if(restante <= 0) {
            ui.imprimirMensaje('Se agoto el presupuesto', 'error');
            formulario.querySelector('button[type="submit"]').classList.remove('btn-primary');
            formulario.querySelector('button[type="submit"]').classList.add('btn-danger');
        }
    }
}

// Instancial UI
const ui = new UI();

// Funciones

let presupuesto;

// preguntar el presupúesto
function preguntarPresupuesto() {

    const presupuestoUsuario = prompt('agregue el presupuesto');
    
    // validar el valor
    if(presupuestoUsuario === '' || presupuestoUsuario === null || !Number(presupuestoUsuario) || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        
        window.location.reload();
    }

    // si pasa la validacion se realiza la instancias
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

// Agregar gastos
function agregarGasto(e) {
    e.preventDefault();

    // validar
    const gasto = document.querySelector('#gasto').value.trim();
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (gasto === '' || gasto === null || cantidad === null || cantidad === '' ) {
        ui.imprimirMensaje('los gastos son obligatorios', 'error');
        return;
    }

    if (!Number(cantidad) || isNaN(cantidad) || cantidad <= 0) {
        ui.imprimirMensaje('Cantida no admitida', 'error');
        return;
    }
    
    // creo objeto para enviar los datos
    const gastosObj = {
        nombre : gasto,
        cantidad : cantidad,
        id : Date.now()
    }

    presupuesto.nuevoGasto(gastosObj);

    // mensaje positivo
    ui.imprimirMensaje('Gasto agregado correctamente');

    // mostrar los gastos 

    // extraemos la lista de los gastos de la Clase Presuesto
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos);

    // actualiza el restante
    ui.actualizarRestante(restante);

    // comprobar el presupuesto para cambiar el color
    ui.comprobarPresupuesto(presupuesto);

    // resetear formulario
    formulario.reset();

}

// Eliminar gasto
function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}


// console.log(formulario)



