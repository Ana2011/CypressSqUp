/// <reference types="cypress" />
import {LoginPage} from '../support/page_objects/login'

describe('Sign In', () => 
{
  it ('Login', function(){
    LoginPage.performLogin(Cypress.env('email'), Cypress.env('password'))
  })
     
  it ('Check Bunner Text', function () {
    cy.contains(Cypress.env('user_name')).wait(6000)
  })

  it ('SignOut', function(){
    LoginPage.performSignOut()
  })

})