
Cypress.Commands.add('FillForm',(data)=>{
    cy.get('[placeholder="Ingresa un codigo"]').type(data.codigo.toString());
    cy.get('[placeholder="Ingresa un nombre para el equipo"]').type(data.nombre);
    cy.get('[name="ubicacion"]').select(data.ubicacion);
});

Cypress.Commands.add('EquipmetPage',()=>{
    cy.visit('/');
    cy.get('[href="/equipos"]').click();
    cy.intercept('GET','/equipments',{fixture:'/equipmentsEmpty.json'}).as('getData');
    cy.wait('@getData');
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