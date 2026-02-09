

// iniciamos la app
function iniciarApp() {

    // selectores
    const selectCategorias = document.querySelector('#categorias');    
    const modalGuardarBtn = document.querySelector('#modal .modal-footer .btn-danger');

    const resultado = document.querySelector('#resultado');

    // Se inicia un elemento de bootstrap para poder llamar el modal 
    const modal = new bootstrap.Modal('#modal', {}); // .Modal('#modal', {}); ===> '#modal' ==> se refiere en el html el id= modal escoge ese elemento ; {} ==> va se de tipo objeto

    // array de recetas favorita
    let recetasFavoritas = [];

    // recetasFavoritas = JSON.parse(localStorage.getItem('recetas')) || [];

    let recetaObj = {
        idMeal : '', 
        strMeal : '', 
        strMealThumb : ''
    }

    // El if es por que hay varias paginas juntas en una arroja error

    // eventos
    if (selectCategorias) {

        selectCategorias.addEventListener('change', seleccionarCategoria);
        
        // obtenemos la categoria
        obtenerCategorias();

    }

    // viene codigo para la el archiv FAVORITOS.JS
    const favoritosDiv = document.querySelector('.favoritos');

    if (favoritosDiv) {
        obtenerFavoritos();
    }


    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => mostrarCategorias(datos.categories)) // enviamos unicamente el objeto como array
            .catch(error => console.log(error))
    }

    // mostrar las recetas
    function mostrarCategorias(categorias = []) {
        
        categorias.forEach(categoria => {
            const {strCategory} = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;

            selectCategorias.appendChild(option);
        });
        
    }

    // mostrar las recetas
    function seleccionarCategoria(e) {       

        // llamamos la api
        const receta = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${receta}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => imprimirRecetas(datos.meals))
            .catch(error => console.log(error))
    }

    // mostrar las recetas en la pagina inicio
    function imprimirRecetas(recetas = []) {
 
        // limpiar el html
        limpiarHTML(resultado);

        // crear un encabezado
        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text.black', 'my-5');

        // es condicional 
        heading.textContent = recetas.length ? 'Resultados' : 'No Hay Resultados';
        resultado.appendChild(heading);

        recetas.forEach(receta => {
            // sacamos los valores a imprimir de la receta
            const {idMeal, strMeal, strMealThumb} = receta;
            
            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4'); // para que se muestren en columnas

            const card = document.createElement('DIV');
            card.dataset.id = idMeal;
            card.classList.add('card', 'mb-4');

            const imagen = document.createElement('IMG');
            imagen.classList.add('card-img-top');
            imagen.alt = `Imagen de la receta ${strMeal}`;
            imagen.src = strMealThumb;

            // este es un contenedor que va tener la informacion descriptiva del card
            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent= strMeal;

            // creamos el boton
            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100'); // w-100 ===> es para que tome todo el ancho del contenedor
            recetaButton.textContent = 'Ver Receta';

            // Para llamar el modal es importante estos dos pasos
            // recetaButton.dataset.bsTarget = "#modal"; // encuantra el id del modal en el html; bs ==> boostrap
            // recetaButton.dataset.bsToggle = "modal"; // bsToggle ===> llama las funciones de boostrap que estan en el archivo de JavaScript

            // funcionalidad de boton
            recetaButton.onclick = function() {
                mostrarModal(idMeal);
            };

            // Inyectar en el DOM

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            card.appendChild(imagen);
            card.appendChild(recetaCardBody);

            recetaContenedor.appendChild(card);

            resultado.appendChild(recetaContenedor);

        });
    }

    // mostrar informacion de la receta en modal
    function mostrarModal(id) {

        // consumo de api
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => mostrarRecetaModal(datos.meals[0]))
            .catch(error => console.log(error))

    }

    // mostrar la informacion en el modal
    function mostrarRecetaModal(receta) {
        
        const modalBody = document.querySelector('#modal .modal-body');
        const modalTitle = document.querySelector('#modal .modal-title');
        

        // sacamos los valores
        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;

        modalTitle.textContent = strMeal;

        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}"/>
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>

            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        // mostrar ingredientes y cantidades
        for (let i = 1; i <= 20; i++) {
            
            if (receta[`strIngredient${i}`] != '') {

                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];
                
                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
                 
            }

            
               
        }

        modalBody.appendChild(listGroup);


        recetaObj = {idMeal : idMeal, strMeal : strMeal, strMealThumb : strMealThumb};
        if (modalGuardarBtn) {
            // validar que no se repita
            const existe = recetasFavoritas.some(rec => rec.idMeal === recetaObj.idMeal);

            if (!existe) {
                modalGuardarBtn.textContent = 'Guardar Favorito';

                modalGuardarBtn.onclick = function() {
                    guardarFavorito(recetaObj);
                }
            } else {
                modalGuardarBtn.textContent = 'Eliminar Favorito';

                modalGuardarBtn.onclick = function() {
                    elminarFavorito(recetaObj);
                }
            }
            
        }
        
        // utilizamos la instancia de arriba del modal y aplicamos una funciones que tiene como prototype
        modal.show(); // muestra el modal
    }


    // mostrar guardar favorito
    function guardarFavorito(recetaObjec) {

        // validar que no se repita
        const existe = recetasFavoritas.some(rec => rec.idMeal === recetaObjec.idMeal);

        if (!existe) {
            // guardamos la receta en el array global
            recetasFavoritas = [...recetasFavoritas, recetaObj];
        }

        // guarar en localStore
        guardarLocalStore();

        // boton
        modalGuardarBtn.textContent = 'Eliminar Favorito';
        mostrarToast('Agregado correctamente');

        modalGuardarBtn.onclick = function() {
            elminarFavorito(recetaObj);
        }
    }

    // eliminar de la lista de favoritos
    function elminarFavorito(recetaElimanr) {

        // eliminamos la receta de la lista
        recetasFavoritas = recetasFavoritas.filter(receta => receta.idMeal !== recetaElimanr.idMeal);

        modalGuardarBtn.textContent = 'Guardar Favorito';
        mostrarToast('Eliminado correctamente');

        modalGuardarBtn.onclick = function() {
            guardarFavorito(recetaObj);
        };


        guardarLocalStore();

    }

    // guardar en local strorel
    function guardarLocalStore() {
        // agregamos a local storel
        localStorage.setItem('recetas', JSON.stringify(recetasFavoritas));
    }

    // crear un toast para que arroje mensaje de que se agrego o se elimino una receta de favoritos
    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');

        // instanciamos el nuevo toast
        const toast = new bootstrap.Toast(toastDiv);

        toastBody.textContent = mensaje;
        toast.show();
    }


    // funcion especial para el archivo de favoritos
    function obtenerFavoritos() {
        // como localStoral no ha reguistrado esta pagina se registra
       recetasFavoritas = JSON.parse(localStorage.getItem('recetas')) ?? [];
        
       
        if (recetasFavoritas.length) {

            imprimirRecetas(recetasFavoritas);
            return;
        } 

        // si no hay favoritos
        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos aun';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');

        favoritosDiv.appendChild(noFavoritos);
    }

    // limpiar datos
    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
}

// llamaos la funcion q inicial la app
document.addEventListener('DOMContentLoaded', iniciarApp);
