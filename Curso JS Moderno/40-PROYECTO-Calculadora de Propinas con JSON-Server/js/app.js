// Para ejecutar node.exe se hace desde la carpeta madera donde va el proyecto en este caso desde la carpe 40-PROYECTO...
// se le da click derechp
//          cick en abrir desde la terminal integrada

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}


const btnGuardarCliente = document.querySelector('#guardar-cliente');
// llamado de funcion guardar client
btnGuardarCliente.addEventListener('click', guardarCliente);


// Funciones

// guardar cliente
function guardarCliente(e) {
    e.preventDefault();
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;
    
    // validar 
    if (mesa == '' || hora == '') {
        imprimirAlerta("Todos los campos deben de estar llenos", "error");
        return;
    }

    // llenar objeto

    // el ...cliente debe de ir primero para que tome los datos de mesa y hora y los agregue al campo de pedido del objeto cliente
    cliente = {...cliente, mesa, hora};
    
    // Ocultar el modal
    const modalFormulario = document.querySelector('#formulario');
    // bootstrap en la ventana global tiene una instancia de modal, se accede a ella para poder instancial el modalFormulario 
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    // ya identificado el modal de bootstrap como codigo js
    modalBootstrap.hide(); // para oculatar el modal
    

    // funcion para mostrar los resultados las secciones
    mostrarSecciones();

    // Obtener platillos de la API de JSON-server
    obtenerPlatillos();
}

// Mostrar las secciones
function mostrarSecciones() {
    // seleccionamos las que tengan las clases de d-none que son secciones ocultas
    const seccionesOcultas = document.querySelectorAll('.d-none'); // como son varios elementos se le agrega .querySelectorAll
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none')) // se recorre el los elementos encontrados y se le elimina la clase que los deja invisbles 'd-none'
}

// consumir api obtener platillos
function obtenerPlatillos() {
    const url = "http://localhost:3000/platillos";

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarPlatillos(datos))
        .catch(error => console.log(error));
}


// mostrar los paltillos 
function mostrarPlatillos(platillos) {
    
    // tener el contendor para mostrar el contenido
    const platilloContenido = document.querySelector('#platillos .contenido');

    // creamos los elementos para mostrar los platillos
    platillos.forEach(platillo => {
        const {id, nombre, precio, categoria} = platillo;

        const row = document.createElement('DIV');
        row.classList.add('row','py-3', 'border-top'); // esto nos va crear un row que nos da acceso al grid de bootstrap

        const nombreDiv = document.createElement('DIV');
        nombreDiv.classList.add('col-md-4'); // le da una clase al contenedor row con grid y la clase 'col-md-4' accede al grid de bootstrap
        nombreDiv.textContent = nombre;

        const precioDIv = document.createElement('DIV');
        precioDIv.classList.add('col-md-3', 'fw-bold');
        precioDIv.textContent = `$${precio}`;

        const categoriaDiv = document.createElement('DIV');
        categoriaDiv.classList.add('col-md-3');
        categoriaDiv.textContent = categorias[categoria];

        // generar un input para la cantidad
        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add('form-control');

        // funcion que dectecta la cantidad y el platillo que se esta agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad}); // lo converimos en un objeto
        }; // es como agregar un evenlister a la funcion porque no se puede agregar es asi solamente

        // creamos el elemento donde vamos a gregar el input
        const agregarDiv = document.createElement('DIV');
        agregarDiv.classList.add('col-md-2');

        agregarDiv.appendChild(inputCantidad);

        // agregamos contenido
        row.appendChild(nombreDiv);
        row.appendChild(precioDIv);
        row.appendChild(categoriaDiv);
        row.appendChild(agregarDiv);
        platilloContenido.appendChild(row);
    });
}

// agregar los paltillos
function agregarPlatillo(producto) {

    let {pedido} = cliente;

    if (producto.cantidad > 0) {
        
        const existePlatillo = pedido.some(platillo => platillo.id == producto.id);

        if (existePlatillo) {
            // creamos el map para que cree un nuevo arreglo copiando al original
            const pedidActualizado = pedido.map(articulo => {
                // condicion
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }

                return articulo;
            });

            // se Asigna el pedido actualizado
            cliente.pedido = [...pedidActualizado];
        } else {
            // agregamos el platillo
            cliente.pedido = [...pedido, producto];

        }
    } else {
        
        eliminarProducto(producto.id);
        
    }   
    
    // condicionpara saber si esta vacido cliente.pedido 
    if (cliente.pedido.length) {
        
        // mostrar el resumen
        actualizarResumen();
    
    } else {
        mensajePedidoVacio();
    }

}

function actualizarResumen() {
    
    const contenido = document.querySelector('#resumen .contenido ');

    // limpiar contenido
    limpiarHTML(contenido);

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');

    // creamos el valor que va llevar los datos de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Informacion de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    const heading = document.createElement('H3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center');

    // Iterar los platiloos pedidos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;

    pedido.forEach(articulo => {
        const {id, nombre, precio, categoria, cantidad} = articulo;
        
        // crear elementos 
        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        // nombre del articulo
        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        // cantidad del articulo
        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        const cantidadSpan = document.createElement('SPAN');
        cantidadSpan.classList.add('fw-normal');
        cantidadSpan.textContent = cantidad;

        // precio del articulo
        const precioEl = document.createElement('P');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio Unidad: ';

        const precioSpan = document.createElement('SPAN');
        precioSpan.classList.add('fw-normal');
        precioSpan.textContent = `$${precio}`;

        // subtotal
        let subTotalArticulo = cantidad * precio;

        const subTotal = document.createElement('P');
        subTotal.classList.add('fw-bold');
        subTotal.textContent = 'Sub total: ';

        const subTotalSpan = document.createElement('SPAN');
        subTotalSpan.classList.add('fw-normal');
        subTotalSpan.textContent = `$${subTotalArticulo}`;

        // boton eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar';

        btnEliminar.onclick = function() {
            eliminarProducto(id);
        };
        
        // sub elementos agregados
        cantidadEl.appendChild(cantidadSpan);
        precioEl.appendChild(precioSpan);
        subTotal.appendChild(subTotalSpan);

        // agregar elementos al li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subTotal);
        lista.appendChild(btnEliminar);
        
        // agregamos la lista al grupo
        grupo.appendChild(lista);
        
    });

    // agragar a los elementos padres
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // agregar al contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    // Mostrar formularios de propinas
    formularioPropinas(); 
}

// alertas
function imprimirAlerta(mensaje, tipo) {
    const existe = document.querySelector('.alert-danger');
    if (!existe) {
        const divAlerta = document.createElement('DIV');
        divAlerta.textContent = mensaje;
        divAlerta.classList.add('alert', 'alert-danger', 'text-center');
        document.querySelector('.modal-dialog').appendChild(divAlerta);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
}


function eliminarProducto(id) {
    const resultado = cliente.pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

     // condicionpara saber si esta vacido cliente.pedido 
    if (cliente.pedido.length) {
        
        // mostrar el resumen
        actualizarResumen();
    
    } else {
        mensajePedidoVacio();
    }

    // El producto se elimino por lo tanto regresamos la cantidad a 0 en el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
}

// limpiar html
function limpiarHTML(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

// agregar el mensaje al contenido cuando este vacio 
function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido ');
    limpiarHTML(contenido);
    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}

// formulario para las propinas
function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido ');
    
    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow');

    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Propina';

    // Radio button 10%
    const radio10 = document.createElement('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    // Radio button 25%
    const radio25 = document.createElement('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    // Radio button 50%
    const radio50 = document.createElement('INPUT');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = "50";
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('DIV');
    radio50Div.classList.add('form-check');

    // Agregar elementos radios
    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);
    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);
    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    // AGREGAR LOS ELEMENTOS DIV PRINCIPAL
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

    // AGREGAR AL FORMULARIO
    formulario.appendChild(divFormulario);

    // AGREGAR AL CONTENIDO 
    contenido.appendChild(formulario);
}

// Caluclar la propina
function calcularPropina(e) {
    const porcentaje = parseInt(e.target.value)/100;

    let {pedido} = cliente;

    let subTotal = 0;

    pedido.forEach(articulo => {
        const {cantidad, precio} = articulo;

        subTotal += cantidad*precio;

    });

    const propina = subTotal * porcentaje;

    const total = subTotal + propina;
    
    mostrarTotalHTML(subTotal, propina, total);
}

// mostrar el total en html
function mostrarTotalHTML(subTotal, propina, total) {
    const formulario = document.querySelector('.formulario > div');
    
    const divTotales = document.createElement('DIV');
    divTotales.classList.add('total-pagar', 'my-5');

    // Subtotal
    const subTotalParrafo = document.createElement('P');
    subTotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subTotalParrafo.textContent = 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subTotal}`;

    // propina
    const propinaParrafo = document.createElement('P');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina : ';

    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    // propina
    const totalParrafo = document.createElement('P');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'Total a Pagar: ';

    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    // Eliminar el resultado previo o el ultimo resultado para que no sobreiscriba
    const totalpagarDiv = document.querySelector('.total-pagar');
    if (totalpagarDiv) {
        totalpagarDiv.remove();
    }

    // Agregar al parrafo contendor
    subTotalParrafo.appendChild(subtotalSpan);
    propinaParrafo.appendChild(propinaSpan);
    totalParrafo.appendChild(totalSpan);
    
    // Agregar al div total
    divTotales.appendChild(subTotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    // agregamos al formulario creados por nosotros
    formulario.appendChild(divTotales);
}