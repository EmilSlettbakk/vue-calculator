describe("Successful Submission", () => {
    beforeEach(() => {
        cy.visit("/kontaktskjema");
    });

    it("Should reset the form on successful submission", () => {
        cy.get('input[type="text"]').type("Test Name");
        cy.get('input[type="email"]').type("test@test.com");
        cy.get('textarea').type("Test Feedback");

        cy.get('button[type="submit"]').click();

        cy.get('input[type="text"]').should("have.value", "");
        cy.get('input[type="email"]').should("have.value", "");
        cy.get('textarea').should("have.value", "");
    });

    it("Should display a success message on successful submission", () => {
        cy.get('input[type="text"]').type("Test Name");
        cy.get('input[type="email"]').type("test@test.com");
        cy.get('textarea').type("Test Feedback");

        cy.get('button[type="submit"]').click();

        cy.get('.success-message').should("contain", "Success");
    });
});