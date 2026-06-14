

// Habilita este archivo a leer DOcument
/**
 * @jest-environment jsdom
 */

// Mockear los módulos que necesitan el DOM
jest.mock('../js/classes/UI.js', () => {
    return class UI {
        constructor() {}
        imprimirCitas() {}
        textoHeading() {}
    };
});

jest.mock('../js/selectores.js', () => ({
    mascotaInput: {},
    propietarioInput: {},
    telefonoInput: {},
    fechaInput: {},
    horaInput: {},
    sintomasInput: {},
    contenedorCitas: {},
    formulario: {},
    heading: {}
}));

// importamos las funciones que vamos a validar
import {suma} from '../js/funciones.js';

// realziamos el test
describe('Suma de 2 numeros', () => {
    test('La suma de 20 y 30 es 50', () => {
        expect(suma(20,30)).toBe(50);
    });
});