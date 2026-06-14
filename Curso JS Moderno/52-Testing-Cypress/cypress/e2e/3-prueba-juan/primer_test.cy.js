
// Para mejorar el soporte de autoCompletado COloca este codigo
/// <reference types="cypress" />
// _____________________________________________________________ // 

describe('Carga la pagina principal', () => {
    // aca solo se utiliza it
    it('Carga la pagina principal', () => {
        // comando para indicar a que archivo realizar la prueba
        cy.visit('/index.html');

        // -------- comando para ejecutar prueba ------- //

        // si en h1 hay el siguiente texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // Segunda prueba obtener elementos en el DOM y saber si existe
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verificar que exista el elemento y contenga un texto 
        cy.get('[data-cy="titulo-proyecto"]') // obtiene la etiqueta
            .invoke('text') // seleccionamos su texto
            .should('equal', 'Administrador de Pacientes de Veterinaria'); // comparamos el texto con el del DOM

        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
        
        // Buscar el texto que no sea igual al que vamos a validar
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal', 'Juan Perez');
    });
});