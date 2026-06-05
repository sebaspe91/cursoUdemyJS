// Self

// es la ventana global es igual a windwos

// Ejemplo 1
window.onload = () => {
    console.log('Ventana Lista');
}

// Ejemplo 2
self.onload = () => {
    console.log('Ventana Lista');
}


const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto ${this.nombre} tiene el precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo())