// importar
import Citas from "./class/Citas.js";
import UI from "./class/UI.js";
import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput, 
    formulario 
} from "./selectores.js";

// instanciamos clases
const administrarCitas = new Citas();
const ui = new UI();

// variables
let editando = false;

// creamos objetos
const citaObj = {
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : ''
}

// creamos la funciones

// agregar al objeto los datos de los inputs
export function datosCita(e) {
    citaObj[e.target.id] = e.target.value.trim();
};

// agregar la cita
export function agregarCita(e) {
    
    // validar los datos
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if (mascota === '', propietario === '', telefono === '', fecha === '', hora === '', sintomas === '') {
        ui.imprimirAlerta('Todos los campos son requerios', 'error');
        return;
    }

    // editando
    if (editando) {
        administrarCitas.editarCita({...citaObj});
        ui.imprimirAlerta('Se edito correctamente');
        document.querySelector('button[type="submit"]').textContent = 'CREAR CITA';
        editando = false;
    } else {
        // creamos id
        citaObj.id = Date.now();

        // enviamos los datos a la clase
        administrarCitas.agregarCita({...citaObj});
        ui.imprimirAlerta('Se registro la cita correctamente');
        
    }
    
    const {citas} = administrarCitas;
    ui.imprimirCita(citas);

    // enviar al local store

    // resetear el objeto "citaObj"
    reiniciarObjeto();

    // resetar formulario
    formulario.reset();

}

// reiniciar los valores del objeto
function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
    citaObj.id = '';
}

export function eliminarCita(id) {

    administrarCitas.eliminarCita(id); 
    ui.imprimirAlerta('Se elimino correctamente', 'error');
    const {citas} = administrarCitas;
    ui.imprimirCita(citas);

}

export function editarCita(cita) {
    // sacamos los valores
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // repintar inputs
    mascotaInput.value = mascota;  
    propietarioInput.value = propietario;  
    telefonoInput.value = telefono;  
    fechaInput.value = fecha;  
    horaInput.value = hora;  
    sintomasInput.value = sintomas;  

    // llenar objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // boton 
    document.querySelector('button[type="submit"]').textContent = 'EDITAR CITA';

    editando = true;
}