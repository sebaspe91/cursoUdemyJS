

// Ejemplo de aprendizaje


// Añadir funciones en un objeto

// const reproductor = {

//     cancion : '',
//     reproducir : (id) => console.log(`Reproduciendo cancnión con el id ${id}`),
//     pausar : (id) => console.log(`pausar la canción con el id ${id}`),
//     crearPlayList : (nombre) => console.log(`Creando la playlist de ${nombre}`),
//     reproducirPlaylist : (nombre)  => console.log(`Reproduciendo la PlayList ${nombre}`),

//      // agregar valores a la variable cancion 
//     set nuevaCancion(cancion){
//         this.cancion = cancion;
//         console.log(`Añadiendo ${cancion}`);
//     },

//     get obtenerCancion() {
//         return this.cancion;
//     }
// }


// // como se usa

// reproductor.reproducir(30);
// reproductor.pausar(20);

// // Para agregar un nuevo metodo 
// reproductor.borrar = id => console.log(`Borrando cancion con id de ${id}`);

// reproductor.borrar(10);
// reproductor.crearPlayList('Heavy Metal');
// reproductor.crearPlayList('Rock 90s');
// reproductor.reproducirPlaylist('Rock 90s');

// // como llmaar el set y get
// // set
// reproductor.nuevaCancion = 'Sungcatoon';

// // get
// let cancionObtenida = reproductor.obtenerCancion;

// console.log(cancionObtenida);


// REPLICAMOS EL CODIGO


const reproductor = {
    cancion : '',
    reproducirCancion : nameCancion => `Reproduciendo la cancion ${nameCancion}`,
    pausarCancion : nameCancion => `Pausar la cancion ${nameCancion}`,
    eliminarCancion : id => `Eliminar la cancion identificada como ${id}`,
    sumarCanciones : (n1, n2) => n1 + n2,

    // agregar el valor a la variable set
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo la cancion ${cancion}`);
    },

    get obtenrCancion(){
        return this.cancion
    }
}


// LLamado de los metodos
let res1 = reproductor.reproducirCancion('MetalPlus');
let res2 = reproductor.pausarCancion('Lorena');
let res3 = reproductor.eliminarCancion('Juan');
let res4 = reproductor.sumarCanciones(3,2);

// set
reproductor.nuevaCancion = 'Nuevo';
let res5 = reproductor.obtenrCancion;


console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);