const producto = {
    nombre : "Monitor de 20 Pulgadas", 
    precio : 300,
    disponible : true
}

// Todo lo retorna en ARRAY

// Para obtener las llaves del objeto
console.log(Object.keys(producto));

// Para sacar solo los values
console.log(Object.values(producto));

let keys1 = Object.keys(producto);
console.log(keys1);

// Para que pase todo en pares dentro de sub arrays
console.log(Object.entries(producto));