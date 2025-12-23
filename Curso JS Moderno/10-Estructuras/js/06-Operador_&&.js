
// Operador &&
const usuario = true;
const pudePagar = true;

if(usuario && pudePagar){
    console.log('Puede Comprar');
}else if(!usuario){
    console.log("No exciste el usuario, crea una cuenta");
}else if(!pudePagar){
    console.log("Fondos insuficientes");
}else{
    console.log('No puede comprar');
}