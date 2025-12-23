// seleccionsr input
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

// Se crea una variable para editar
let editando;

// Clases
class Citas {
    // constructoe
    constructor(){
        this.citas = [];
    }

    // metodos
    agregarCita(cita){        
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){

        // map = Retorna un nuevo arreglo y lo asigna a lista de citas

        // condicion q compara los id de todas las cita con el id de la cita actualiza, si encuentra e id la cita actualizada remplaza ese objeto, de lo contrario el objeto no se remplaza o se remplaza con la misma informacion
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}


class UI {
    // metodos
    imprimirAlerta(mensaje, tipo){
        const mensajeDiv = document.createElement('div');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(tipo === 'error'){
            mensajeDiv.classList.add('alert-danger');
        } else {
            mensajeDiv.classList.add('alert-success');
        }

        document.querySelector('#contenido').insertBefore(mensajeDiv, document.querySelector('.agregar-cita'));

        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }

    // el distroich const {var,var2} = objeto,   se puede realizar dentro de los parametros
    imprimirCitas({citas}){

        this.limpiarHTML();

        citas.forEach(cita => {
            // se saca las variables
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            // elemento contenedor de los datos de cada cita
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;
            
            // Scripting de los elementos

            // Se crea el titulo para el nombre de la mascota
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-titlt', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            // se crean cada uno de los parrafos
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

            // creamos los botones

            // heroicons es una pagina para iconos   no necesita de enlaces script

            // elominar
            const btnEliminar = document.createElement('button');
            btnEliminar.innerHTML = `
            Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          `;
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2', 'text-center');

            btnEliminar.onclick = () => {
                eliminarCita(id);
            }

            // boton editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info', 'mr-2');
            btnEditar.innerHTML = `
                Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>              
            `;
            
            // Se envia la cita como argumento ya q contiene toda la informacion para editar
            btnEditar.onclick = () => cargarEdicion(cita);

            // Agregamos los parrafos al div
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // agregamos el div al DOM
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

// instanciar de forma global
const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();

function eventListeners(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}


// Se crea un objeto global
const citaObj = {
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : ''
}


// Funciones

// Agrega los datos en el objeto citaObj
function datosCita(e){
    // Para que esto funcione se debe de tener definido name pero se puede hacer con id
    citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de Citas
function nuevaCita(e){
    e.preventDefault();

    // extraemos los datos del objeto global citaObj
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // Validar inputs
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Los campos deben de estar llenos', 'error');
        return;
    }

    // pedazo q se hace casi a lo ultimo la edicion

    // si entro en modo edicion si dio en el boton editar cambia editando = true

    if(editando){
        ui.imprimirAlerta('Agregado Correctamente');

        // pasar el objeto de una cita
        administrarCitas.editarCita({...citaObj});

        // el boton submit toma otra vez el valor inicial
        formulario.querySelector('button[type="submit"').textContent = 'CREAR CITA';

        // Quitar modo edicion
        editando = false;
    } else {
        // Generar un id, no se hizo arriba por gasta mucho recuso ya q se va llenando por eventos
        citaObj.id = Date.now();

        // Creando una nueva cita

        // Como el citaObj se envia remplaza todos los valores originales antrs de el y lkos copia. Para evitar esto se debe de enviar una copia del objeto {...Objeto}
        administrarCitas.agregarCita({...citaObj});

        // mensaje de agregado correctamente
        ui.imprimirAlerta('Agregado Correctamente');
    }

    // Reiniciar el objeto para la validacion
    reiniciarObjeto();

    formulario.reset();

    // mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas)
}

// Se debe de reiniciar el objeto ya que esta de manera global y va qdar con la informacion anterior
function reiniciarObjeto(){
    
    citaObj.mascota ='';
    citaObj.propietario ='';
    citaObj.telefono ='';
    citaObj.fecha ='';
    citaObj.hora ='';
    citaObj.sintomas ='';
    
}

// Eliminar cita medica por boton
function eliminarCita(id){
    // eliminar cita
    administrarCitas.eliminarCita(id);

    // muestra msm
    ui.imprimirAlerta('La cita se elimino correctamente');
    
    formulario.reset();
    
    // refresque cita
    ui.imprimirCitas(administrarCitas)

}

// edicion
function cargarEdicion(cita){
    // muestra la informacion en los input
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // llenar input
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // guardar cambios
    formulario.querySelector('button[type="submit"').textContent = 'Guardar Cambios';
    
    // llenar el objeto de nuevo para pasar la validacion de los campos vacios
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;


    // modo edicion
    editando = true;
}