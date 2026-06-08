// ----------------- Factory ----------------------

/** 
 * Es una forma de crear objetos basados en sierta condicion, es decir van a compartir ciertos atributos pero por alguna condicion algunos se reutilizan y otros son diferentes
 */

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    // Metodos
    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        // condicon 
        switch(tipo) {
            case 'text':
                return new InputHTML(tipo, nombre);
            case 'number':
                return new InputHTML(tipo, nombre);
            case 'tel':
                return new InputHTML(tipo, nombre);
            case 'email':
                return new InputHTML(tipo, nombre);
            default:
                return;
        }
    }
}

// Instanciamos
const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento('number', 'numero-cliente');
console.log(inputText3.crearInput());

const elemento4 = new HTMLFactory();
const inputText4 = elemento4.crearElemento('email', 'email-cliente');
console.log(inputText4.crearInput());