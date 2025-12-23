
// Operador OR
const efectivo = 300;
const credito = 100;
const disponible = efectivo + credito;
const totalAPagar = 600;

if(efectivo > totalAPagar || credito < totalAPagar || disponible > totalAPagar){
    console.log("Si puede pagar");
}else{
    console.log("Fondos insuficientes");
}