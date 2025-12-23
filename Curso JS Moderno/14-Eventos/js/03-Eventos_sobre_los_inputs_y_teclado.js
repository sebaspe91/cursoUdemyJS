// Eventos soble los INPUT

// son eventos que hace el teclado

// ejemplo: cuando escribes en twter muestra cuantos caracteres has usado----- cuando escribes un correo hace la validacion si el correo tiene el formato correcto y asi con otras acciones

const busqueda = document.querySelector('.busqueda');

// keydown
// escuhca cuando oprimis la tecla en el input seleccionado
busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
});

// keyup
// es casi lo mismo que el Keydown pero se activa cuando suelta la tecla que escribes en el inpuit
busqueda.addEventListener('keyup', () => {
    console.log('Soltando la tecla...');
});

// blur
// escucha cuando ingresas al input y cuando sales y das click afuera del input se activa
// sirve mucho para la validacion de formularios
busqueda.addEventListener('blur', () => {
    console.log('Ingrese al input y di click afuera de el...');
});

// copy
// cuando das ctrl + C se activa el evento
busqueda.addEventListener('copy', () => {
    console.log('Copio con CTRL + C...');
});

// paste
// cuando usas ctrl + v para pegar 
busqueda.addEventListener('paste', () => {
    console.log('Pego con CTRL + V...');
});

// cut
// cuando cortas (ctrl + x) el texto
busqueda.addEventListener('cut', () => {
    console.log('corto con CTRL + X...');
});

// input
// se ejecuta cuando:  -escribes -cortas -pegas... Lo unico que no puede hacer es la accion de blur ni copiar
busqueda.addEventListener('input', (evento) => {
    console.log(evento);
});


// cuando usas un parametro dentro de esta funcion anonima como evento en el ejemplo de arriba muestra que evento esta sucediendo y sus caracteriscas como que tipo de etiqueta es, que evento utilizo, si tiene id si tineen clases la direccion url de la etiqueta etc

// evento.type
// nos muestra que tipo de etiqueta es "input"
busqueda.addEventListener('input', (evento) => {
    console.log(evento.type);
});

// evento.target
// Muestra que inpugt en especifico estamos escribiendo
busqueda.addEventListener('input', (evento) => {
    console.log(evento.target);
}); 


// IMPORTANTE

// con el .target.value

// muestra lo que el usuario esta escribiendo en un imput.....Ejmplo para una busqueda cuando el usuario va escribiendo el puede tomar ese valor e ir buscando
busqueda.addEventListener('input', (evento) => {
    console.log(evento.target.value);
});

// forma de validar que un input tenga algo de validacion
busqueda.addEventListener('input', (evento) => {
    if(evento.target.value === ''){
        console.log('Fallo la validacion');
    }
});