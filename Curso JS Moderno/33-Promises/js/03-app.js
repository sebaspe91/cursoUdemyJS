// promesas

// palabras reservadas para el Promise:
// resolve = que es lo que se va a ejecutar cuando se cumpla correctamente la promesa.

// reject = se ejecuta cuando se tiene un error en la promesa
const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

// esta es la forma para acceder a la respuesta de la promesas
aplicarDescuento
    .then(resultado => { //Cuando el valor es true
        console.log(resultado);
    })
    .catch(error => { // cuando no se cumple
        console.log(error);
    })
    


//  Hay 3 valores posible

// fulfilled - El promise se cumplio
// rejected - El promise NO se cumplio
// pending - El promise NO sabe si se cumple o no