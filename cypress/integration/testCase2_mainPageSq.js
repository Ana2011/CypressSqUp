/// <reference types="cypress" />
import selectors from '../support/selectors';
import test_data from '../support/test_data';

describe('Main_page_squareup', () => 
{
    before(function(){
        cy.visit(Cypress.config('baseUrl'))
    })

    it('Banner', () => {

        cy.get(selectors.banner.square).should("have.text",test_data.main_page_squareup.title_1)
        cy.get(selectors.banner.products).eq(0).should("have.text", test_data.main_page_squareup.title_2)
        cy.get(selectors.banner.business_types).eq(1).should("have.text", test_data.main_page_squareup.title_3)
        cy.get(selectors.banner.resources).eq(2).should("have.text",test_data.main_page_squareup.title_4)
        cy.wait(2000)
        cy.get(selectors.banner.why_square).eq(0).should("have.text",test_data.main_page_squareup.title_5)
        cy.get(selectors.banner.sign_in).eq(1).should("have.text",test_data.main_page_squareup.title_6)
        cy.get(selectors.banner.shop).eq(2).should("have.text",test_data.main_page_squareup.title_7)
    })

})