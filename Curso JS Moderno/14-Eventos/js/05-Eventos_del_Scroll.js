// eventos SCROLL del mouse

// window es el contenedor mayor que tiene todos los elementos de html y tambien maneja la parte de scrollY y scrollX 
window.addEventListener('scroll', () => {

    // con este metodo podemos ver en pixeles la cantidad de scroll que se le ha dado en vertical
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    // se pude usar para que se ejecute una animacion cuando llegue ha sierta parte de la pagina
    const premium = document.querySelector('.premium');
    // con este metodo de getBoundingClienteReact() sirve para ver la ubicacion de un elemento en la pantalla en pixeles
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    // con .top podemos ver los en pixeles la ubicacion vertical de la parte de arriba y bottom la parte de abajo del elemento 
    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    }else{
        console.log('aun No da mas scroll');
    }
})
