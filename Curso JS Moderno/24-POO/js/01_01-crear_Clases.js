
// crear clases
class Persona {
    
    // constructores
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    // metodos
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getTelefono() {
        return this.telefono;
    }

    getInformacion() {
        return `El usuario ${this.nombre} tiene el telefono ${this.telefono}`;
    }

    // metodo que no necesita ser instanciada
    static bienbenida() {
        return `Bienvenido a nuestra APP`;
    }
}

// herencia

class Cliente extends Persona {

    // privada
    #password;

    constructor(nombre, telefono, pass, usuario, correo) {
        super(nombre, telefono);
        this.#password = pass;
        this.usuario = usuario;
        this.correo = correo;
    }

    // metodos
    setPass(pass) {
        this.#password = pass;
    }
    getPass() {
        return this.#password;
    }

    setUsuario(usuario) {
        this.usuario = usuario;
    }
    getUsuario() {
        return this.usuario;
    }
    
    setCorreo(correo) {
        this.correo = correo;
    }
    getCorreo() {
        return this.correo;
    }

    static segundaParte() {
        return `SEGUNDA PARTE`;
    }
}

console.log(Persona.bienbenida());

const Juan = new Persona('JuanPerez', '3103607179');

console.log(Juan.getNombre());
console.log(Juan.getTelefono());

Juan.setNombre('Sebastian');
Juan.setTelefono('3503360273');

console.log(Juan.getNombre());
console.log(Juan.getTelefono());
console.log(Juan.getInformacion());
console.log(Juan);

// nuevo

console.log(Cliente.segundaParte())
const cliente2 = new Cliente('JulioCastro', '3133802496', 'admin', 'ju100', 'ju100@gamil.com');

console.log(cliente2.getNombre())
cliente2.setNombre('Lorena')
console.log(cliente2.getNombre())


