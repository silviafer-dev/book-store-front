/* eslint-disable no-undef */
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/");
  });
});
describe("when we click on the book card", () => {
  it("successfully loads to the detail card page", () => {
    cy.visit("http://localhost:3000/book/1");
    cy.get(".input-name").clear().should("have.value", "");
    cy.get(".input-name").type("Example").should("have.value", "Example");
    cy.get(".update__form").submit();
    cy.reload();
  });
  describe("When we click in the title", () => {
    it("we will visit the home page", () => {
      cy.get(".header__title").click();
      cy.url().should("include", "/");
    });
  });
  describe("When we click in the button Add Book", () => {
    it("we will visit the Add Book page", () => {
      cy.get(".add-book-button").click();
      cy.url().should("include", "/book");
    });
  });
  describe("When we fill the form and leave one or more lines empty", () => {
    it("we get a error message", () => {
      cy.get(".add__button").click();
    });
  });
  describe("When we fill the form", () => {
    it("we create a new book", () => {
      cy.get(".input-title")
        .type("Title book")
        .should("have.value", "Title book");
      cy.get(".input-isbn").type("123-123-5").should("have.value", "123-123-5");
      cy.get(".input-author").type("1").should("have.value", "1");
      cy.get(".add__form").submit();
    });
  });
});
