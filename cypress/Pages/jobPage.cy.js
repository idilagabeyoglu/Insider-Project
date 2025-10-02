export default class JobPage {
    verifyJobPage() {
        cy.contains('a', 'View Role')           
         .should('have.attr', 'href')
         .then((href) => {
         const url = new URL(href);

      // 2)Stay on the same page to origin
        cy.origin(url.origin, { args: { href } }, ({ href }) => {
          cy.visit(href);

      // 3)Check Apply For this Job button is visible
         cy.get(
           'body > div.content-wrapper.posting-page > div > div.section-wrapper.accent-section.page-full-width > div > div.postings-btn-wrapper > a',
         { timeout: 15000 })
         .should('be.visible'); });
         });
    }
}