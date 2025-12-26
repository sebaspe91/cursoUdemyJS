// creamos objetos
const producto = {
    nombre : 'Auto',
    precio : 500,
    cantidad : 2
}

// creamos un array
const meses = ['Enero', 'Febrero', 'Marzo'];

// Creamos el localStorage

// Convertimos el objeto en string
const productoObjet = JSON.stringify(producto);
const mesesArray = JSON.stringify(meses);

localStorage.setItem('producto',productoObjet);
localStorage.setItem('meses',mesesArray);

// traemos el producto
const productoNuevo = JSON.parse(localStorage.getItem('producto'));
const MesesNuevo = JSON.parse(localStorage.getItem('meses'));

// actualizamos el objeto 
productoNuevo.calidad = 'Alta';
// actualizamos array
MesesNuevo.push('Abril');

// actualizamos el localStorage
localStorage.setItem('producto', JSON.stringify(productoNuevo));
localStorage.setItem('meses', JSON.stringify(MesesNuevo));



console.log(MesesNuevo)