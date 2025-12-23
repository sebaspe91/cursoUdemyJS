// moment

// Es una libreria q utiliza fechas y deja modificar la fecha en español o en otro idioma

// para acceder a ella debe de ingresar a la pagina moment y copiar el scrip y pegarlo en el archivo html 

// se pega tambien el scrpt local esyr script ta,bien se encuentra en en la pagins moment

const diaHoy = new Date();

// idioma español
moment.locale('es');

const fecha = moment().format('MMMM/dddd/DD/YYYY --- HH:mm:ss a');

console.log(fecha)
console.log(moment().format('LLLL', diaHoy))

// para seleccionar una fecha futura se coloca los dias de distancia
console.log(moment().add(3, 'days').calendar())