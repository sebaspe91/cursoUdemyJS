


// El for in ===> Itera sobre OBJETOS

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];



for(let i in pendientes){
    console.log(i);
}



const automovil = {
    modelo : 'Camaro',
    year : 1969,
    motor : '6.0'
}

// itera sobre objetos con in
for(let i in automovil){
    console.log(`${automovil[i]}`);
}

// for of para iterar objetos
for(let [llave, valor] of Object.entries(automovil)){
    console.log(`${llave} : ${valor}`);
}
