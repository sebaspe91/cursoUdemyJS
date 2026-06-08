// ------------------------- Mediator ----------------------------------

/**
 * es un intermediario que se comunica con diferentes objetos a la vez 
 * 
 * El mediador define objetos ya localizados para objetivos especificos
 */

// este mediador va requerir diferentes objetos

function Vendedor(nombre) {
    // 
    this.nombre = nombre;
    this.sala = null; // nul porque cuando se haga la subasta se utiliza esa funcion y es hay donde sellanan tano para el vendedo como el comprador
}

// creasmo un prototipo, para q sean funciones exclivas del vendedor
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null; // nul porque cuando se haga la subasta se utiliza esa funcion y es hay donde sellanan tano para el vendedo como el comprador
}

Comprador.prototype = { // creasmo un prototipo, para q sean funciones exclivas del Comprador
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : $${cantidad}`);
    }
}

// mediador    pone al comprador y al vendedor en la misma sala
function Subasta() {
    let compradores = {},

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this; // esto va tener la instancia actual de la subasta
        }
    }
}


// Crear objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// interaccion

// Registrar los compradores y vendedores
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

juan.oferta(350, juan);
pablo.oferta(450, pablo);
juan.oferta(500, juan);
pablo.oferta(700, pablo);

vendedor.vendido('Pablo');