export default class HomePage {
        visitHomePage() {
        cy.visit('https://useinsider.com//');
    }
    
    verifyHomePage() {
        let expectedTitle = "#1 Leader in Individualized, Cross-Channel CX — Insider"
        cy.get("head > title").then(function(title){
        let actualTitle = title.text();
        assert.equal(actualTitle, expectedTitle);
        });
    }

    navigateFromDropdown(navigateSubmenu) {
        cy.get('.navbar-toggler').click();
        cy.get(':nth-child(6) > #navbarDropdownMenuLink').click();
        cy.contains(navigateSubmenu).click({force: true});    
    }

}

