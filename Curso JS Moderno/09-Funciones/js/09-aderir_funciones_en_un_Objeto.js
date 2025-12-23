
// Añadir funciones en un objeto

const reproductor = {
    reproducir : function(id) {  // estas funciones dentro del objeto son "metodos de propiedad"
        console.log(`Reproduciendo cancnión con el id ${id}`);
    },
    pausar : function(id) {
        console.log(`pausar la canción con el id ${id}`);
    },
    crearPlayList : function(nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la PlayList ${nombre}`);
    },
    actualizarPlayList : id => {
        console.log(`Se actualizo la playlist de id ${id}`);
    }
}


// como se usa

reproductor.reproducir(30);
reproductor.pausar(20);

// Para agregar un nuevo metodo 
reproductor.borrar = function(id) {
    console.log(`Borrando cancion con id de ${id}`);
}

reproductor.borrar(10);
reproductor.crearPlayList('Heavy Metal');
reproductor.crearPlayList('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');
reproductor.actualizarPlayList(10);