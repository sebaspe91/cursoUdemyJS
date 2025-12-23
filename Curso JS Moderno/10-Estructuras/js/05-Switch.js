

// Switch

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${efectivo}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${efectivo}`);
        break;
    default:
        console.log('No has seleccionado un metodo de pago');
        break;
}