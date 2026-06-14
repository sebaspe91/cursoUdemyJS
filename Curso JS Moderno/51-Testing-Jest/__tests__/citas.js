
import Citas from "../js/classes/Citas";

describe('Testring a la clase de Citas', () => {

    // Instanciamos la class de Citas fuera de los test para que este disponible en los demas test
    const citas = new Citas();

    // agregamos el id en forma global para hacer la prueba de actualizar
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        // se toma este objeto que se envia a la clase Citas para crear la cita y se llena con informacion 
        const citaObj = {
            mascota: 'Luna',
            propietario: 'Juan',
            telefono: '3103607179',
            fecha: '11-06-2026',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        // agregamos el id
        citaObj.id = id;

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    // Actualizar citas
    test('Actualizar cita', () => {
        const citaActualizada = {
            mascota: 'Nuevo Nombre',
            propietario: 'Juan',
            telefono: '3103607179',
            fecha: '11-06-2026',
            hora:'10:30',
            sintomas: 'Solo duerme',
            id
        };

        // realziar el metodo
        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    // Eliminar cita
    test('Eliminar Cita', () => {
        // realziar el metodo
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();        
    });
});