export class HomePage {
    navigateTo(){
        cy.visit('https://work.co/')
    }
    
    getTitle(){
        
        cy.get('[data-test-id="header-title-text"]')
        .should('be.visible')
        .should('have.text', 'We design and ship digital products that transform companies.');
    }
    getLogo(){
        
        cy.get('[data-test-id="global-menu-btn"]')
        .should('be.visible')
    }

}
