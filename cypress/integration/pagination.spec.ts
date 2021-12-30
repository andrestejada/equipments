describe('testing the paginator', () => {
    before(()=>{
        cy.EquipmetPage();
    });
    it('should be get the equipment of the other page', () => {
        cy.get('.sc-fzoyAV > :nth-child(2)').as('btn2').click();
        cy.intercept(
            {
              pathname:'/equipments',
              query:{
                  _limit:'3',
                  _page:'2',
                  _sort:'id',
                  _order:'desc',
              }
            },
            {
              method: 'GET',        
              headers: { 'x-total-count': '6' },
              fixture:'./equipmenstPage2.json',
            }
          ).as('getDelete');

          cy.get('.sc-fzqNJr > :nth-child(3)')
            .should('not.be.visible');
        cy.get('@btn2').should('have.css','background-color','rgb(62, 138, 206)');

    });
});