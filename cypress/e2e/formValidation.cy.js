describe("Form Validation", () => {
    beforeEach(() => {
        cy.visit("/kontaktskjema");
    });

    it("Should disable submission when form is invalid", () => {
        cy.get('button[type="submit"]').should("be.disabled");
    });

    it("Should display error for invalid email", () => {
        cy.get('input[type="text"]').type("Test Name");
        cy.get('input[type="email"]').type("invalid-email");
        cy.get('textarea').type("Test Feedback");
        cy.get('button[type="submit"]').should("be.disabled");
    });

    it("Should enable submission with a valid form", () => {
        cy.get('input[type="text"]').type("Test Name");
        cy.get('input[type="email"]').type("test@test.com"); // adding this line
        cy.get('textarea').type("Test Feedback");

        cy.get('button[type="submit"]').should("not.be.disabled");
    });
});