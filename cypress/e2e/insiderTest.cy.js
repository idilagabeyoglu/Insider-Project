import HomePage from "../Pages/homePage.cy.js";
import CareersPage from "../Pages/careersPage.cy.js"; 
import QAPage from "../Pages/qaPage.cy.js";
import QAOpenPositionsPage from "../Pages/qaOpenPositionsPage.cy.js";
import JobPage from "../Pages/jobPage.cy.js";

const homePage = new HomePage();
const careersPage = new CareersPage();
const qaPage = new QAPage();
const qaOpenPositionsPage = new QAOpenPositionsPage();
const jobPage = new JobPage();

describe("Insider Test", () => {
    it("Case 1", () => {
        homePage.visitHomePage();
        homePage.verifyHomePage();
    });

    it("Case 2", () => {
        homePage.visitHomePage();
        homePage.navigateFromDropdown('Careers');
        careersPage.verifyCareersPage();
    });

    it("Case 3", () => {
        qaPage.visitQAPage();
        qaPage.clickSeeQAJobs();

        qaOpenPositionsPage.clickFilterButton();

        cy.wait(40000);

        qaOpenPositionsPage.selectDepartment('Quality Assurance');

        cy.wait(5000);

        qaOpenPositionsPage.selectLocation('Istanbul, Turkiye');
        qaOpenPositionsPage.verifyJobList();  
    });
    it("Case 4", () => {
        qaPage.visitQAPage();
        qaPage.clickSeeQAJobs('Quality Assurance', 'Quality Assurance', 'Istanbul, Turkiye');
    });

    it("Case 5", () => {
        qaOpenPositionsPage.visitQAOpenPositionsPage();
        qaOpenPositionsPage.clickViewRole();
        jobPage.verifyJobPage();
     });

});
