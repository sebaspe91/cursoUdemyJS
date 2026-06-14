
/// <reference types="cypress" />


describe('Llena los campos para una nueva cita - formularios', () => {
    // submit al formulario
    it('Llenar los campos para validar', () => {
        // comando para indicar a que archivo realizar la prueba
        cy.visit('/index.html');
        
        // seleccionar campos

        // mascota
        cy.get('[data-cy="mascota-input"]')
            .type('Luna'); // .type( ) ===> Escribe dentro del input

        // propietario
        cy.get('[data-cy="propietario-input"]')
            .type('Juan Perez');

        // telefono
        cy.get('[data-cy="telefono-input"]')
            .type('3103607179');

        // fecha
        cy.get('[data-cy="fecha-input"]')
            .type('2026-06-27'); // tiene formato especifico y cypress los mensiona cuando no reconoce

        // hora
        cy.get('[data-cy="hora-input"]')
            .type('15:30'); // tiene formato especifico y cypress los mensiona cuando no reconoce

        // sintomas
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Duerme mucho');

        // boton submit
        cy.get('[data-cy="submit-cita"]')
            .click(); // Simula el boton
        
        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        // seleccionar alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        // seleccionar alerta para ver la clase
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    });
});