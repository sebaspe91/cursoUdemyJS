import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor(nombre, saldo, categoria) {
        super(nombre, saldo);
        this.categoria = categoria;
    }

    // rescribir metodo 
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.saldo}, categoria: ${this.categoria}`;
    }
}