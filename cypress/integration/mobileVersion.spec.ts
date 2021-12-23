describe('testin in the mobile version', () => {
    
    before(()=>{
        cy.viewport(576,750);
        cy.visit('/');
    });
    
    it('should be have the burguer menu', () => {
        cy.get('#open-menu').as('Burguer');
        cy.get('@Burguer')
            .should('exist')
            .and('have.css','fill','rgb(255, 111, 0)');            
        cy.get('@Burguer').click();
        cy.contains('Home').should('exist');
        cy.contains('Equipos').should('exist');
        cy.contains('Productos').should('exist');
        cy.get('path').click();
        cy.get('@Burguer').should('exist');
        cy.get('#close-menu').should('not.exist');

    });
});