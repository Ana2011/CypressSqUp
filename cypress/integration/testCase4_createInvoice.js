/// <reference types="cypress" />
import selectors from '../support/selectors';
import test_data from '../support/test_data';
import {LoginPage} from '../support/page_objects/login';

describe('Create Invice', () => 
{
  before(function(){
    LoginPage.performLogin(Cypress.env('email'), Cypress.env('password'))
  })

  
  it('Create Invoice', () => {
    //cy.contains(selectors.home.home_sel, selectors.home.home_txt).click()
    //cy.get(selectors.home.home_sel).click()
    //cy.get(selectors.invoices.invoice).click()
   // cy.get(selectors.invoices.invoice_button).eq(0).click()  
    cy.get(selectors.invoices.send_invoice_button.send_sel,{ timeout: 60000 }).click({ multiple: true }).parent()
  //cy.wait(4000)

    cy.get(selectors.invoices.customer_name).wait(2000).type(test_data.main_page_customer.customer).wait(2000).type('{downarrow}').type('{enter}')
    cy.get(selectors.invoices.invoice_title).type(test_data.main_page_customer.invoice_title).click()
    cy.get(selectors.invoices.message).type(test_data.main_page_customer.message).click()
    cy.get(selectors.invoices.item).type(test_data.main_page_customer.item).type('{downarrow}').type('{enter}')
    cy.get(selectors.invoices.price).clear().type(test_data.main_page_customer.price).type('{enter}')
    cy.get(selectors.invoices.send_button.send_sel).find(selectors.invoices.send_button.send_sel_1)
      .contains(selectors.invoices.send_button.send_txt).click()
  })
  
})