describe('testing in validation equipments page', () => {
    before(()=>{
        cy.EquipmetPage();
    });
    it('should be show the alert all input are required', () => {
        cy.get('[type="submit"]').click();
        cy.contains('span','el codigo es requerido',{matchCase:false}).should('exist'); 
        cy.contains('span','el nombre es requerido',{matchCase:false}).should('exist'); 
        cy.contains('span','la ubicacion es requerida',{matchCase:false}).should('exist'); 
    });
    it('should be show the alert the name and location are required', () => {
        cy.get('[type="submit"]').click();
        cy.get('[placeholder="Ingresa un codigo"]').type('123');
        // cy.get('[name="ubicacion"]');
        cy.contains('span','el codigo es requerido',{matchCase:false}).should('not.exist'); 
        cy.contains('span','el nombre es requerido',{matchCase:false}).should('exist'); 
        cy.contains('span','la ubicacion es requerida',{matchCase:false}).should('exist'); 
    });
    it('should be show the alert the location is requiered', () => {
        cy.get('[type="submit"]').click();
        cy.get('[placeholder="Ingresa un nombre para el equipo"]').type('equipo 1');
        // cy.get('[name="ubicacion"]');
        cy.contains('span','el codigo es requerido',{matchCase:false}).should('not.exist'); 
        cy.contains('span','el nombre es requerido',{matchCase:false}).should('not.exist'); 
        cy.contains('span','la ubicacion es requerida',{matchCase:false}).should('exist'); 
    });
    it('should be pass the validation', () => {
        cy.addEquipment();        
    });
});