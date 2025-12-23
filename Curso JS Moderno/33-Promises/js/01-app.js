// Son promesas

// Callback = Cuando esta descargando un dato ese dato ya no va hacer parte de la descarga ya desacargado

const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        // callback puede ser cualquier funcion que se desee llamar 
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

// 
nuevoPais('Alemania', mostrarPaises);