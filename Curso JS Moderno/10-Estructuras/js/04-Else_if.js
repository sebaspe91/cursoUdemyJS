
// else if

const dinero = 100;
const totalAPagar = 300;
const targeta = false;
const cheque = true;


if(dinero >= totalAPagar){
    console.log("Si podemos pagar porque tengo el dienro");
}else if(targeta){
    console.log("Si puedo pagar porque tengo la targeta");
}else if(cheque){
    console.log("Si puedo pagar porque tengo El cheque");
}else{
    console.log("Fondos Insuficientes");
}