// modulos 

// es la segmentacion del codigo dividida por partes para la creacion de software especialmente en grupos ya que se divide las en tareas.

// Como sabemos cuando une los script en el html se mesclan variables las cuales no se pueden repetir. Esto conlleva a que hlla errores, para evitar estos errores a un metodo que se llama IIFE, o una funcion que se ejecuta inmediatamente

// Funcion que se ejecuta inmediatamente

// Sive para que las variable no se mesclen

// Esto permite tener tus variable y funcionen en el archivo local




// // sintaxis
// (function() {

//     console.log('Desde un IIFE')

//     // para asignar el valor global o sea q otros archivos js puedan tomar esa variable es con window.
//     window.nombreCliente = 'Juan';

// })(); // este parentesis es para que se ejecute inmediatamente






// Palabra export : permite EXPORTAR una variable, clase, funcion u objeto para importarla en otros archivos

export const nombreCliente2 = 'Sebastian';
export const saldo = 300;


// exportar funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}


// funcion tiene saldo
export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('Tiene Saldo');
    } else {
        console.log('No tiene saldo');
    }
}



// Exportar una clase
export class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // metodo 
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.saldo}`;
    }
}



// Export Default

// No puede tener 2 export default solo y unicamente 1 por archivo

// con esto se le puede colocar cualquier nombre cuando se importe solo q debe de estar fuera de los {}

// no requiere importar dentro de las llaves
export default function nuevaFuncion() {
    console.log('Este es el export default');
}