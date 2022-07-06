/// <reference types="Cypress" />

describe("Conduit sign in tests", () => {
  it("Login with valid informations!", () => {
    cy.visit("https://demo.realworld.io/#/login");
    cy.get(":nth-child(2) > .form-control").type("a19@a19");
    cy.get(":nth-child(3) > .form-control").type("a19");
    cy.get(".btn").click().url().should("include", "/#");
  });
  it("Login with invalid informations!", () => {
    cy.visit("https://demo.realworld.io/#/login");
    cy.get(":nth-child(2) > .form-control").type("onur@gmail");
    cy.get(":nth-child(3) > .form-control").type("onur");
    cy.get(".btn").click();
    cy.get("div.ng-scope > .ng-binding").should(
      "include.text",
      "email or password is invalid"
    );
  });
  it("Check the results when email&password are left blank", () => {
    cy.visit("https://demo.realworld.io/#/login");
    cy.get(":nth-child(2) > .form-control").should("have.value", "");
    cy.get(":nth-child(3) > .form-control").should("have.value", "");
    cy.get(".btn").should("be.disabled");
  });
  it("Check the results when clicked on 'Need an account?'", () => {
    cy.visit("https://demo.realworld.io/#/login");
    cy.get('p.text-xs-center > [ui-sref="app.register"]')
      .click()
      .url()
      .should("include", "/register");
  });
});
