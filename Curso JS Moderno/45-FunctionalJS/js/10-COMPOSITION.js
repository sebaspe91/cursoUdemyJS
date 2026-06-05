// COMPOSITION

/**
 * Es como una alternativa a las clases
 * 
 * Es escribir muchas funciones e ir utilizando en los objetos las funciones que se van a utilizar
 */

// CREAMOS UNA FUNCION PARA LLAMAR LAS OTRAS FUNCIONES
const obtenerNombre = info => ({
    // se utiliz aesta sintaxis porque es una funcion dentro de otra funcion
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
})

// email
const obtenerEmail = info => ({
    // se utiliz aesta sintaxis porque es una funcion dentro de otra funcion
    mostrarEmail() {
        console.log(`Email: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    // se utiliz aesta sintaxis porque es una funcion dentro de otra funcion
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    // se utiliz aesta sintaxis Porque es una funcion dentro de otra funcion
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
})


// Agregar un nuevo valor a un argumento del objeto
const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

// ---------------------- Fin de la clase o creador de objtos ---------------------------- FIN --------------

// UTILIZAMOS FUNCIONES 

// objeto cliente
function Cliente(nombre, email, empresa) {
    // se deben de guardar como objeto
    let info = {
        nombre,
        email,
        empresa
    }

    // Para utilizar estas funciones y agregarlo al objeto es con la siguiente sintaxis
    return Object.assign(
        info,
        obtenerNombre(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
        guardarEmail(info)
    );
}

// creamos un nuevo objeto empleado
function Empleado(nombre, email, puesto) {
    // 
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        obtenerEmail(info),
        obtenerPuesto(info),
        guardarEmail(info)
        
    );
}


const cliente = Cliente('Juan', null, 'Codigo Con Juan');
//  para utilizar la funcion se llama a la funcion que esta dentro
cliente.mostrarNombre(); // esta mostrarNombre() es una funcion que esta dentro de la funcion obtenerNombre()
cliente.agregarEmail('juan@hotmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Sebastian', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@hotmail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

console.log(cliente)
console.log(empleado)