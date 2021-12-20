describe('testing delete equipment in the equipment pages', () => {
    before(()=>{
        cy.visit('/');
        cy.get('[href="/equipos"]').click();
        cy.intercept('GET','/equipments',{fixture:'/equipments.json'}).as('getData');
        cy.wait('@getData');
    });
    
    it('should be select the card and delete ', () => {
        cy.intercept('DELETE','/equipments/1',{statusCode:200}).as('Delete');
        cy.get(':nth-child(1) > :nth-child(4) > .sc-fzqBZW').click();
        cy.wait('@Delete');
        cy.get('.sc-fzqNJr > li').should('have.length',2);
        cy.contains('li','Bascula').should('not.exist');
    });
});