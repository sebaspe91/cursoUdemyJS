// Implicit_Binding

// se da por implicito donde encontrar el valor dentro de funciones o clases es con el .this



// Ejmeplo
const usuario = {
    nombre : 'Juan',
    edad : 20,
    informacion() {
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`)
    },

    // otro objeto
    mascota : {
        nombre : 'Lili',
        edad : 1,
        informacion() {
            console.log(`Nombre de la mascota es ${this.nombre} y la edad es ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();