
const aprendiendo = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');


// Arrow Function
const aprendiendo2 = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}


// con esta funcoon no es necesario de colocar el return
const aprendiendo3 = tecnologia => `Aprendiendo ${tecnologia}`;

// Cuando la funcion requiere dos o mas parametros es necesario colocarle el parentesis
const aprendiendo4 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;


aprendiendo('Java0');
aprendiendo2('Java1');
console.log(aprendiendo3('JavaX'));

let ressult = aprendiendo3('Java');
console.log(ressult);

ressult = aprendiendo4('Java', 'Node.js');
console.log(ressult);