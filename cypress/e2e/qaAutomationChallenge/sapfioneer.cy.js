import ContactUs_PO from '../../support/pageObjects/ContactUs_PO'
import FinanceEsg_PO from '../../support/pageObjects/FinanceEsg_PO'
import HomePage_PO from '../../support/pageObjects/HomePage_PO'
/// <reference types="cypress" />

describe('Chellenge test suit - SAP Fionner', () => {
	const homePage_PO = new HomePage_PO()
	const financeEsg_PO = new FinanceEsg_PO()
	const contactUs_PO = new ContactUs_PO()

	beforeEach(() => {
		homePage_PO.visitHomepage()
	})

	it('verify menu buttons are visible', () => {
		homePage_PO.veryfyMenuButtonAreVisible()
	})

	it('verify Financial Control button redirection', () => {
		homePage_PO.clickOnFinancialControl()
		financeEsg_PO.verifyFinanceControlUrl()
	})

	it('verify contact messages for empty submision fields', () => {
		homePage_PO.clickOnGetInTouch()
		contactUs_PO.verifyContactUrl()
		cy.moveDownPixels(900)
		contactUs_PO.clickOnSubmicButton()
		contactUs_PO.verifyEmptyContactFormValidationMessges()
	})
})
