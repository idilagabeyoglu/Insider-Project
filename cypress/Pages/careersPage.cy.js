export default class CareersPage {
    verifyCareersPage() {
        let expectedTitle = "Ready to disrupt? | Insider Careers"
        cy.get("head > title").then(function(title){
        let actualTitle = title.text();
        assert.equal(actualTitle, expectedTitle);
        });
    }

}