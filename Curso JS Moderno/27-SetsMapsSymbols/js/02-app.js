//  Set debil o en ingles WeakSet

// Es casi lo mismo que Set solo que en el WeakSet recibe solo Objetos.

weakset = new WeakSet();

// objeto
const cliente = {
    nombre : 'Juan',
    saldo : 100
}

const cliente2 = {
    nombre : 'Sebas',
    saldo : 160
}

// agregar
weakset.add(cliente);
weakset.add(cliente2);

// .has para buscar un objeto
const encontrado = weakset.has(cliente2);
console.log(encontrado)

// borrar un valor
weakset.delete(cliente);

// No tiene .size 

// No se puden iterar con foEach solo con Map()

console.log(weakset)