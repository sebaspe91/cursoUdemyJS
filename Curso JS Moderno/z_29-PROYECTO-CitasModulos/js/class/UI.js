
// importaciones
import {eliminarCita, editarCita} from './../funciones.js';
import {citasContendor} from './../selectores.js';

// clases
class UI {
    // mostramos alerta
    imprimirAlerta(mensaje, tipo) {
        // creamos
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if (tipo == "error") {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // eliminar el msm
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
        // console.log('desde UI')
    }

    // mostrar cita
    imprimirCita(citas) {
        // limpias html
        this.limpiarHTML();

        // mostrar las citas
        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            // creamos los elementos
            const citaDiv = document.createElement('div');
            citaDiv.classList.add('cita', 'p-3');
            citaDiv.dataset.id = id;

            const mascotaText = document.createElement('h2');
            mascotaText.textContent = mascota;
            mascotaText.classList.add('card-title', 'font-weight-bolder');

            const propietarioText = document.createElement('p');
            propietarioText.innerHTML = `<span class="font-weight-bolder">Propietario: </span>${propietario}`;

            const telefonoText = document.createElement('p');
            telefonoText.innerHTML = `<span class="font-weight-bolder">Telefono: </span>${telefono}`;

            const fechaText = document.createElement('p');
            fechaText.innerHTML = `<span class="font-weight-bolder">Fecha: </span>${fecha}`;

            const horaText = document.createElement('p');
            horaText.innerHTML = `<span class="font-weight-bolder">Hora: </span>${hora}`;

            const sintomasText = document.createElement('p');
            sintomasText.innerHTML = `<span class="font-weight-bolder">Sintomas: </span>${sintomas}`;

            const eliminarBtn = document.createElement('button');
            eliminarBtn.type = 'button';
            eliminarBtn.onclick = () => eliminarCita(id);
            eliminarBtn.classList.add('btn', 'btn-danger', 'mr-2');
            eliminarBtn.innerHTML = `Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

            const editarBtn = document.createElement('button');
            editarBtn.type = 'button';
            editarBtn.onclick = () => editarCita(cita);
            editarBtn.classList.add('btn', 'btn-info');
            editarBtn.innerHTML = `Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`;

            // agregar los elementos
            citaDiv.appendChild(mascotaText);
            citaDiv.appendChild(propietarioText);
            citaDiv.appendChild(telefonoText);
            citaDiv.appendChild(fechaText);
            citaDiv.appendChild(horaText);
            citaDiv.appendChild(sintomasText);
            citaDiv.appendChild(eliminarBtn);
            citaDiv.appendChild(editarBtn);

            citasContendor.appendChild(citaDiv);
        });
        // console.log(citas)
    }

    limpiarHTML() {
        while (citasContendor.firstChild) {
            citasContendor.removeChild(citasContendor.firstChild);
        }
    }
}

export default UI;