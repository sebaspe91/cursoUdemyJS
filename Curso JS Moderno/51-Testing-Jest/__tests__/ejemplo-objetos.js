
const cliente = {
    nombre: 'Juan Sebastian',
    balance: 500
}

describe('Testing al Cliente', () => {
    test('El cliente es primium', () => {
        expect(cliente.balance).toBeGreaterThan(400); // Pregunta si ese valor es mayor que 
    });

    test('Es Juan Sebastian', () => {
        expect(cliente.nombre).toBe('Juan Sebastian');
    });

    // Prueba para comparar que no sea un valor
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });
    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
});