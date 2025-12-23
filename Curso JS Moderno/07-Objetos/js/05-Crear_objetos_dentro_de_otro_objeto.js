
// Creamos un objeto dentro de otro objeto


const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true,
    infomacion : {
        medidas : {
            peso : '1klg',
            medida : '1m'
        },
        fabricacion : {
            pais : 'China'
        }
    }
}

console.log(producto);

// podemos llamar solo el objeto
console.log(producto.infomacion);

// podemos llamar solo la proioedad del objeto
console.log(producto.infomacion.medidas.peso);

// podemos llamar solo la proioedad del objeto
console.log(producto.infomacion.fabricacion.pais);