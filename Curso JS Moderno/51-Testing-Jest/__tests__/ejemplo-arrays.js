
const carrito = ['Producto1', 'Prod2', 'Product3'];

describe('Testing al carrito de compras', () => {
    
    test('Probar que el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });

    // test('Carrito no vacio', () => {
    //     expect(carrito).not.toHaveLength(0);
    // });
});