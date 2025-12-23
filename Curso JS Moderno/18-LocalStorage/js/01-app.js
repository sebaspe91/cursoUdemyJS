// LocalStorage

// es una fomra de mantener la informacion en el pc es lo mismo de una sesion solo que esta perdura a si el pc lo apaguen queda guardada la informacion 

// como es una api de javaScript se puede encontrar en la ventana global de windwos

// AGREGAR DATOS AL LOCAL STORAGE
localStorage.setItem('llave', 'valor');

// para poder ver los valores que tiene localStorage se hace con los sigueintes pasos:

// 1) ingrese a la consola del navegador
// 2) en la barra de busqueda donde esta los elements / console / Sources ... seleccionamos la opcion de "application"
// 3) nos aparece un sub menu donde referenciamos en la parte izquierda de la ventana un contenedor con el nomebre de Storage, donde esta la obcion de local stoage. en este piunto sale los datos almacenados


// NOTA: En algunos navegadores el localStorage se enecuentra como almacenamiento

// NOTA: El localStorage solo puede guardar string por lo tanto es imposible que guarde arreglos u objetos en el para esto se hace con

// Para guardar los datos de un arreglo u objeto se debe de pasar a string y el metodo mas facil es con JSON.stringify()

// convertir un obnjeto en string
const producto = {
    nombre : "Monitor 24 Pulgadas",
    precio : 300
}

const prductoString = JSON.stringify(producto);

// lo guardamos al local storaStoralge
localStorage.setItem('producto', prductoString);

// agregamso un arreglo
const arregloMeses = ['enero', 'febrero', 'marzo'];

localStorage.setItem('meses', JSON.stringify(arregloMeses));