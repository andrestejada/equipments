describe('Name of the group', () => {
  before(() => {
    cy.EquipmetPage();
  });
  it('should be filter correcty the search terms', () => {
    cy.get('.sc-fznyAO > .sc-fzqNJr').type('mo');
    cy.get('[role="searchButton"]').click();
    cy.intercept('GET', '/equipments', { fixture: './allEquipmentsInDB.json' });
    cy.get('.sc-fzqNqU').should('contain', 'Su Termino de busqueda es mo');
    cy.get('.sc-fzoiQi')
      .children()
      .should('have.length', 2)
      .and('contain', 'Mo');
  });
  it('press the button to remove the term search and no should contain the component termsearch', () => {
    cy.get('.sc-fzqNqU > .sc-fzqBZW').click();
    cy.intercept(
      {
        pathname: '/equipments',
        query: {
          _limit: '3',
          _page: '1',
          _sort: 'id',
          _order: 'desc',
        },
      },
      {
        method: 'GET',
        headers: { 'x-total-count': '6' },
        fixture: './equipmentsPage1.json',
      }
    ).as('get');
    cy.wait('@get');
    cy.get('body').should('not.contain', 'Su termino de busqueda');
  });
});
