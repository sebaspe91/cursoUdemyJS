// // Ejemeplo mas avanzado 

// // Desaparecer y aparecer una ventana

// const btnFlotante = document.querySelector('.btn-flotante');

// // Seleccionamos el footer que es el q aparece y desaparece
// const footer = document.querySelector('#footer');

// // Con funcion Anonima

// // btnFlotante.addEventListener('click', () => {
// //     console.log('Diste click en el boton');
// // });

// // Con funcion declarativa

// btnFlotante.addEventListener('click', mostrarOcultarFooter);

// function mostrarOcultarFooter(){

//     // el .contains('name_class'); mira si tiene la clase del parametro activada si es true la remueve y si no la agrega

//     if(footer.classList.contains('activo')){
//         footer.classList.remove('activo');
//         btnFlotante.classList.remove('activo');
//         btnFlotante.textContent = 'Idioma y Moneda';
//     }else{
//         footer.classList.add('activo');
//         // this. hace referencia al elemento que mando llamar la funcion en este caso es lo mismo que btnFlotante
//         this.classList.add('activo');
//         this.textContent = 'Cerrar';
//     }
    
// }

// console.log(btnFlotante);



// repaso

// tomamos las etiquetas

// botno flotante
const btn_flotante = document.querySelector('.btn-flotante');

// footer
const footer = document.querySelector('#footer');

// creamos la funcion

btn_flotante.addEventListener('click', mostrarNoMostrarFooter);

function mostrarNoMostrarFooter () {
    // .contains ===> verifica si una etiqueta tiene o no tiene una clase
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btn_flotante.classList.remove('activo');
        btn_flotante.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo'); // llama la etiqueta que acciono o sea el btn_flotante
        this.textContent = 'Cerrar';
    }
}

console.log(footer);