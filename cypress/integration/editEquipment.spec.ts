describe('testing when a user want to modify a existing equipment', () => {
    
    before(()=>{
        cy.visit('/');
        cy.get('[href="/equipos"]').click();
        cy.intercept('GET','/equipments',{fixture:'/equipments.json'}).as('getData');
        cy.wait('@getData');
    });
    
    it('When I press the botton edit should be appears the values in the form', () => {
        cy.get(':nth-child(1) > .sc-fzqBZW > [role="edit"]').click();
        cy.get('[placeholder="Ingresa un codigo"]').should('have.value',123);
        cy.get('[placeholder="Ingresa un nombre para el equipo"]').should('have.value','Bascula');
        cy.get('[role="ubicacion"]').should('have.value','fabrica');
    });

    it('should be change the code value when a edit the equipment', () => {
        cy.intercept('PUT','/equipments/2', (req)=>{
            req.reply({body:req.body});
        });
        cy.get(':nth-child(2) > .sc-fzqBZW > [role="edit"]').click();
        cy.get('[placeholder="Ingresa un codigo"]').type('2');
        cy.get('.sc-fzoXzr > .sc-fzqNJr').click();
        cy.get('.sc-fzplWN').should('contain','5682');
    });
});