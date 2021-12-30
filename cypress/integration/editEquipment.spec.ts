describe('testing when a user want to modify a existing equipment', () => {
  before(() => {
    //'/equipments/?_limit=3&_page=1&_sort=id&_order=desc',
    cy.visit('/');
    cy.get('[href="/equipos"]').click();
    cy.intercept(
      {
        pathname:'/equipments',
        query:{
            _limit:'3',
            _page:'1',
            _sort:'id',
            _order:'desc',
        }
      },
      {
        method: 'GET',        
        headers: { 'x-total-count': '6' },
        fixture: './equipmentsPage1.json',
      }
    );
  });

  it('When I press the botton edit should be appears the values in the form', () => {
    cy.get(':nth-child(1) > .sc-fzqBZW > [role="edit"]').click();
    cy.get('[placeholder="Ingresa un codigo"]').should('have.value', 123);
    cy.get('[placeholder="Ingresa un nombre para el equipo"]').should(
      'have.value',
      'Bascula'
    );
    cy.get('[role="ubicacion"]').should('have.value', 'fabrica');
  });

  it('should be change the code value when a edit the equipment', () => {
    cy.intercept('PUT', '/equipments/2', (req) => {
      req.reply({ body: req.body });
    }).as('edit');
    cy.get(':nth-child(2) > .sc-fzqBZW > [role="edit"]').click();
    cy.get('[placeholder="Ingresa un codigo"]').type('2');
    cy.get('.sc-fznxsB > .sc-fzoLag').click();
    cy.wait('@edit');
    cy.get('.sc-fzplWN').should('contain', '5682');
  });
});
