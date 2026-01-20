
// clases
class Citas {
    constructor() {
        this.citas = [];
    }
    
    // agregar la cita
    agregarCita(citaObj) {
        this.citas = [...this.citas, citaObj];
    }

    // eliminar una cita
    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    // editar 
    editarCita(citaObj) {
        this.citas = this.citas.map(cita => cita.id === citaObj.id ? citaObj : cita);
    }
}

// exportar la Cita
export default Citas;