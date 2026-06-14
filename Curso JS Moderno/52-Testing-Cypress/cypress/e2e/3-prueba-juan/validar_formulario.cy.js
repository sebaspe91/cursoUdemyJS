
/// <reference types="cypress" />


describe('Validar formularios', () => {
    // submit al formulario
    it('Submit al formulario y mostrar la alerta de error', () => {
        // comando para indicar a que archivo realizar la prueba
        cy.visit('/index.html');

        // Testet
        cy.get('[data-cy="formulario"]')
        .submit(); // es precioinar el voton

        // seleccionar alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        // seleccionar alerta para ver la clase
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-danger'); // verifica si tiene la clase de alert-danger
    });
});