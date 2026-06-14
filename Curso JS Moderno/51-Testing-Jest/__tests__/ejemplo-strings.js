
const password = "123456";

describe('Validar que el passwor no este vacio y mas de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6); // valida cuantos caracteres tiene
    });
    
    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0); // es una frma de negar que no tenga la extencion de 0 que no este vacio
    });
});