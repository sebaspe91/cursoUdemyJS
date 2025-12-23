
import { datosCita, nuevaCita } from '../funciones.js';

import {
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario
} from "../selectores.js";


class App {

    constructor() {
        // inicia la aplicacion
        this.initApp();
    }

    // los llamados eventos
    initApp() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        // formulario para nueva cita
        formulario.addEventListener('submit', nuevaCita);
    }

}

export default App;