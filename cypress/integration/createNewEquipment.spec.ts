import {equipment} from '../fixtures/equipment.js';

describe('testing in the page equipments', () => {

    before(()=>{
        cy.EquipmetPage();        
    });
    
    it('should be render correctly ', () => {
        cy.intercept('POST','/equipments',(req)=>{
            req.reply({body:{...req.body,id:1}});
        });
        cy.FillForm(equipment);
        cy.get('[type="submit"]').click();
        cy.contains(equipment.nombre).should('exist');
        cy.contains(equipment.codigo).should('exist');
        cy.contains(equipment.ubicacion).should('exist');
    });
});