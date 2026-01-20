// importar 
import {agregarCita, datosCita} from './../funciones.js';
import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './../selectores.js';

// inciar la app
class App {
    constructor() {
        this.iniciarApp(); // se auto inicializa
    }

    // inciamos automaticamente la app para llamar la funciones
    iniciarApp() {
        // validar
        mascotaInput.addEventListener('input', datosCita);
        propietarioInput.addEventListener('input', datosCita);
        telefonoInput.addEventListener('input', datosCita);
        fechaInput.addEventListener('input', datosCita);
        horaInput.addEventListener('input', datosCita);
        sintomasInput.addEventListener('input', datosCita);

        formulario.addEventListener('submit', agregarCita);
    }
}

export default App;