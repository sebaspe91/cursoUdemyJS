// variables => elementos
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

// Clases

// citas
class Citas {
    constructor() {
        this.citas = [];
        this.ocupado = '';
    }

    // metodos

    // agregar
    agregarCita(cita) {       
        this.citas = [...this.citas, cita];
    }

    // eliminar
    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    // editar
    editarCita(citaObj) {
        this.citas = this.citas.map(cita => cita.id === citaObj.id ? citaObj : cita);
    }

    // validar cita si estan en la misma hora y fehca
    validarCita(fechaObj, horaObj) {
        this.ocupado = 'libre';
        this.citas.forEach(cita => {
            const {fecha, hora} = cita;
            if (fechaObj === fecha) {
                if (horaObj === hora) {
                    this.ocupado = 'ocupado';
                }
            }
        });
        console.log(this.ocupado)
    }
}

// manipular el grafico
class UI {
    // metodos
    // mensaje de alerta
    imprimirAlerta(mensaje, tipo) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if (tipo === 'error') {
            mensajeDiv.classList.add('alert-danger');
        } else {
            mensajeDiv.classList.add('alert-success');
        }

        document.querySelector('#contenido').insertBefore(mensajeDiv, document.querySelector('.agregar-cita'));

        // eliminar el mensaje despues de 3 segundos
        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }

    // mostrar las citas
    imprimirCitas(citaObj) {
        // limpiar las citas
        this.limpiarHTML();

        citaObj.forEach(cita => {

            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            // crear
            const citaDiv = document.createElement('div');
            citaDiv.classList.add('cita', 'p-3');
            citaDiv.dataset.id = id;

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.textContent = mascota;
            mascotaParrafo.classList.add('card-titlt', 'font-weight-bolder');

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono:</span> ${telefono}
            `;
            
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `;
            
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora:</span> ${hora}
            `;
            
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas:</span> ${sintomas}
            `;

            // botones
            const btnEliminar = document.createElement('button');
            btnEliminar.type = 'button';
            btnEliminar.innerHTML = `
                Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `;
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2', 'text-center');
            btnEliminar.onclick = () => {
                eliminarCita(id);
            };

            const btnEditar = document.createElement('button');
            btnEditar.type = 'button';
            btnEditar.classList.add('btn', 'btn-info', 'mr-2');
            btnEditar.innerHTML = `
                Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>              
            `;
            btnEditar.onclick = () => cargarEdicion(cita);


            // agregamos los elementos
            citaDiv.appendChild(mascotaParrafo);
            citaDiv.appendChild(propietarioParrafo);
            citaDiv.appendChild(telefonoParrafo);
            citaDiv.appendChild(fechaParrafo);
            citaDiv.appendChild(horaParrafo);
            citaDiv.appendChild(sintomasParrafo);
            citaDiv.appendChild(btnEliminar);
            citaDiv.appendChild(btnEditar);

            contenedorCitas.appendChild(citaDiv);
        });
    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

// Instancias
const ui = new UI();
const administrarCitas = new Citas();

// Funciones



// EVENTOS

// llamamos los eventos 
eventListeners();

// eventos
function eventListeners() {

    document.addEventListener('DOMContentLoaded', () => {
        // mostrar las citas guardadas 
        
    });

    // inputs
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    // submit
    formulario.addEventListener('submit', nuevaCita);

}

// objeto

citaObj = {
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : ''
}

// agregamos los valores en el objeto
function datosCita(e) {
    citaObj[e.target.id] = e.target.value.trim();
}


// agregar una nueva cita
function nuevaCita(e) {
    e.preventDefault();
    
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // validamos la informacion
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    // validar que las citas no coincidan ni con la misma fecha y hora
    administrarCitas.validarCita(fecha, hora);
    const {ocupado} = administrarCitas;
    if (ocupado == 'ocupado') {
        ui.imprimirAlerta('Fecha y Hora ocupada', 'error');
        return;
    }

    // Editar
    let edicion = '';
    if (editando) {
        edicion = 'editada';
        administrarCitas.editarCita({...citaObj});
        formulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA';
        editando = false;
    } else {
        edicion = 'creada';
         // agregamos el id al objeto validado
        citaObj.id = Date.now();
        administrarCitas.agregarCita({...citaObj}); // crea una copia parea q los valores no de repitan
    }
   

    ui.imprimirAlerta(`Cita ${edicion} correctamente`);

    reiniciarObjeto();
    formulario.reset();

    // enviamos el arreglo de la clase
    const {citas} = administrarCitas;
    ui.imprimirCitas(citas);
}

// Reiniciamos los valores el objeto
function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
    citaObj.id = '';
}

// eliminar una cita
function eliminarCita(id) {
    administrarCitas.eliminarCita(id);
    ui.imprimirAlerta('Cita eliminada correctamente');
    const {citas} = administrarCitas;
    ui.imprimirCitas(citas);
}

// editar
function cargarEdicion(cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // boton
    formulario.querySelector('button[type="submit"]').textContent = 'EDITAR CITA';

    // booleano
    editando = true;
}