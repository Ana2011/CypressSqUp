/// <reference types="cypress" />
import selectors from '../selectors';

export class SQLoginPage {

    performLogin(email, password) {
        cy.visit(Cypress.config('baseUrl'))
        cy.contains('Sign In').click()
        cy.get(selectors.login.email_address,{ timeout: 60000 }).type(email, {log: false, delay: 100 })  
        cy.get(selectors.login.password).type(password, { log: false, force: true })
        cy.get(selectors.login.sign_in).click()
    //     cy.get(selectors.login.top_menu_button).click()
    //    cy.get(selectors.login.sign_out).click()
    }

    performSignOut() {
        cy.get(selectors.login.top_menu_button).click()
        cy.get(selectors.login.sign_out).click()
    }

}

export const LoginPage = new SQLoginPage();