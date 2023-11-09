// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})

Cypress.Commands.add('getIframeBody', () => {
	// get the document
	return (
		getIframeDocument()
			// automatically retries until body is loaded
			.its('body')
			.should('not.be.undefined')
			// wraps "body" DOM element to allow
			// chaining more Cypress commands, like ".find(...)"
			.then(cy.wrap)
	)
})

const getIframeDocument = () => {
	return (
		cy
			.get('iframe[id="hs-form-iframe-0"]')
			// Cypress yields jQuery element, which has the real
			// DOM element under property "0".
			// From the real DOM iframe element we can get
			// the "document" element, it is stored in "contentDocument" property
			// Cypress "its" command can access deep properties using dot notation
			// https://on.cypress.io/its
			.its('0.contentDocument')
			.should('exist')
	)
}

Cypress.Commands.add('verifyCurrentPage', url => {
	cy.url().should('eq', 'https://www.sapfioneer.com' + url)
})

Cypress.Commands.add('verifyElementMessage', (selector, message) => {
	cy.getIframeBody().find(selector).should('have.text', message)
})

Cypress.Commands.add('moveDownPixels', pixNum => {
	cy.scrollTo(0, pixNum)
})
