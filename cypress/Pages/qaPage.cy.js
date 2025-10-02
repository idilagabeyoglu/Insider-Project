export default class QAPage {

    website= "https://useinsider.com/careers/quality-assurance/";
    visitQAPage() {
       cy.visit(this.website);
    }

    clickSeeQAJobs() {
       cy.get('#page-head > div > div > div.col-12.col-lg-7.order-2.order-lg-1 > div > div > a').click();
    }

    searchJobs(position, department, location) {
        let nextBtn = cy.get('#pagination > div > div > div.pagination-mobile.col-12.d-block.d-lg-none > div > div > button.btn.btn-yellow.rounded.has-icon.page-button.next.pr-4');
        let jobCount=0;
        cy.wrap(null).then(function loop() {
        // count jobs on the current page
        cy.get('#jobs-list > div > div').each(($job) => {
            const $el  = Cypress.$($job);
            const pos  = $el.find('p').first().text();
            const dept = $el.find('span').first().text();  
            const loc  = $el.find('div').first().text();
        
        if (pos.includes(position) && dept.includes(department) && loc.includes(location)) {
            cy.log('Matched Job:', pos, dept, loc);}
        })
        .then(() => {
            // Check if Next is disabled
            cy.wait(2000);
            
            // Re-get the button to ensure it's the current state
            cy.get('#pagination > div > div > div.pagination-mobile.col-12.d-block.d-lg-none > div > div > button.btn.btn-yellow.rounded.has-icon.page-button.next.pr-4').then($btn => {
                if ($btn.is('[disabled]')) {
                    console.log('Final jobCount:', jobCount);
                    return; // Stop the loop
                } else {
                    // Go to the next page
                    nextBtn.scrollIntoView().click({ force: true });
                    cy.wait(4000);
                    // Continue the loop
                    return cy.wrap(null).then(loop);
                }
            });
        });
      });
    } 
}


