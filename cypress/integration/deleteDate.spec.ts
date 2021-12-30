describe('testing delete equipment in the equipment pages', () => {
    before(()=>{
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
          ).as('get');
          cy.wait('@get');
    });
    it('should be select the card and delete ', () => {
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
              body:[  {
                codigo: 123,
                nombre: 'Bascula',
                ubicacion: 'fabrica',
                id: 1
                },
                {
                codigo: 568,
                nombre: 'Centrifuga',
                ubicacion: 'fabrica',
                id: 2
            }],
            }
          ).as('getDelete');
        cy.intercept('DELETE','/equipments/3',{statusCode:200}).as('Delete');
        cy.get(':nth-child(3) > .sc-fzqBZW > [role="button"]').click();
        cy.wait('@Delete');
        cy.wait('@getDelete');
        cy.contains('li','Motor').should('not.exist');
    });
});