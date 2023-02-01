/// <reference types="cypress" />

describe('Table Seating', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow the host to select a table and enter number of patrons occupying the table', () => {
    cy.contains('Seating')
      .click();

    cy.contains('Northwest Booth 1')
      .click();

    cy.get('[data-patrons-for-table="Northwest Booth 1"]')
      .type('4')
      .blur();

    cy.contains('Northwest Booth 1 (4)')
      .should('exist');
  });
});
