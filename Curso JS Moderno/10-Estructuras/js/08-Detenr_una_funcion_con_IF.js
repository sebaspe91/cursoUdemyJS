// Buenas practicaas

// Detener la ejejcucion de una funcion con un IF

// cuando se usa con boolenados es mejor colocarlo de esta forma el codigo es mas limpio

const autenticado = true;

if(autenticado){
    console.log("Esta autenticado");
}


// otro ejemplo

// Cuando tenga el if hay que tener en cuenta el orden de los if para q aserte en la condicion que qeremos 


// Este Codigo es muy similiar en la vida real es muy usuado.............................___________

const puntaje = 500;

function revisarPuntaje(){

    if(puntaje > 400){
        console.log('Buen puntaje... feliciades');
        return;  // sirve para q no se ejecute mas el codigo
    }else if (puntaje > 300){
        console.log('Buen puntaje excelente');
        return;

    }

}


revisarPuntaje();