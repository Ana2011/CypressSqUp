/// <reference types="cypress" />

describe('Landing Page', () => 
{
    before(function(){
        cy.visit(Cypress.config('baseUrl'))
    })
   
    it('Veryfy Title Of The Landing Page', () => 
    {
      cy.title().should('eq','Square | Solutions For Your Small, Medium & Large Business')
    })
})