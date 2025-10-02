export default class QAOpenPositionsPage {

    clickFilterButton() {   
         cy.get('#career-position-filter > div > div > div.accordion-menu.col-12.d-flex.d-lg-none.justify-content-between.align-items-center > button').click();
    }
    
    selectDepartment(department) {
        cy.get('#select2-filter-by-department-container').click({force: true});
        cy.contains(department).click({force: true})
    } 

    selectLocation(location) { 
        cy.get('#select2-filter-by-location-container > span').click({force: true});    
        cy.get('.select2-container--open .select2-results__options')
         .contains('.select2-results__option', location)
         .scrollIntoView()
         .click({ force: true });  
    }  
    
    verifyJobList () {
        cy.get('#jobs-list').should('be.visible');
    }

    visitQAOpenPositionsPage() {
        cy.visit("https://useinsider.com/careers/open-positions/?department=qualityassurance");
    }

    clickViewRole() {
        cy.get("#jobs-list > div:nth-child(1) > div > a").click({force: true});
    }
    
}