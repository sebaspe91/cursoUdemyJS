
// Dentro de un objeto puede tener una funcion que susa como un metodo

const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true,
    monstrarInfo: function() { // funcion dentro del objeto
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


producto.monstrarInfo();

// NOTA: La palabra this.propiedad usa los valores que existen en el mismo objeto