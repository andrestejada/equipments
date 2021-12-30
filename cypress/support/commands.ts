
Cypress.Commands.add('FillForm',(data)=>{
    cy.get('[placeholder="Ingresa un codigo"]').type(data.codigo.toString());
    cy.get('[placeholder="Ingresa un nombre para el equipo"]').type(data.nombre);
    cy.get('[name="ubicacion"]').select(data.ubicacion);
});

Cypress.Commands.add('EquipmetPage',()=>{
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

Cypress.Commands.add('addEquipment',()=>{
    cy.intercept('POST','/equipments',(req)=>{
        req.reply({body:{...req.body,id:1}});
    }).as('saveEqui');
    cy.fixture('equipment.json').then(e=>{
        this.data = e;
        cy.get('[placeholder="Ingresa un codigo"]').clear().type(this.data.codigo.toString());
        cy.get('[placeholder="Ingresa un nombre para el equipo"]').clear().type(this.data.nombre);
        cy.get('[name="ubicacion"]').select(this.data.ubicacion);
        cy.get('[type="submit"]').click();
    });
    cy.wait('@saveEqui');
});