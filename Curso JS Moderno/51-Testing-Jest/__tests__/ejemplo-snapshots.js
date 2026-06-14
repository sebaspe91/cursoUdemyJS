/**
 *      Nos da una opción de comprobar un objeto de una forma mas sencilla

    - Son datos que se almacenan en un string se crean en una carpeta aparte y sobre ella se puede comparar si es el mismo dato, si es el mismo cliente o si es otro cliente
 */

const cliente = {
    nombre: 'Juan 2',
    balance: 500,
    tipo: 'Premium'
}

// Probar el objeto completo
describe('Testing al cliente', () => {
    test('Es Juan Sebastian', () => {
        expect(cliente).toMatchSnapshot(); // Cuando se ejecute la prueba se crea una carpeta nueva llamada __snapshots__
    }); 
});