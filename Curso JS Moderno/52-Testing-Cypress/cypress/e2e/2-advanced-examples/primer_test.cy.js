
// Para mejorar el soporte de autoCompletado COloca este codigo
/// <reference types="cypress" />
// _____________________________________________________________ // 

describe('Carga la pagina principal', () => {
    // aca solo se utiliza it
    it('Carga la pagina principal', () => {
        cy.contains('h1', 'Administrador de pacientes de veterinaria');
    });
});