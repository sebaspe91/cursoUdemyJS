// fechas 

// las fechas estan en un objeto llamado DATE

const diaHoy = new Date();

let valor;

// la fecha es de tipo objeto
valor = diaHoy;

// solo el año en numero
valor = diaHoy.getFullYear();

// solo el mes en numero inicia en 0 enero = 0, febrero = 1 ...
valor = diaHoy.getMonth();

// solo el dia en numero
valor = diaHoy.getDate();

// solo los minuto de la hora en la q esta
valor = diaHoy.getMinutes();

// solo la hora en numeros
valor = diaHoy.getHours();

// solo el mes
valor = diaHoy.getTime();

// modificar el año
valor = diaHoy.setFullYear(2010);




console.log(valor);