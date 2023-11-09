class ContactUs_PO {
	verifyContactUrl() {
		cy.verifyCurrentPage('/contact/')
	}

	clickOnSubmicButton() {
		cy.getIframeBody().find('input[value = "Submit"]').click()
	}

	verifyElementMessage(selector, message) {
		cy.getIframeBody().find(selector).should('have.text', message)
	}

	verifyEmptyContactFormValidationMessges() {
		const contactFieldMessage = 'Please complete this required field.'

		cy.verifyElementMessage('div[class^="hs_firstname "] label[class^="hs-error-msg"]', contactFieldMessage)

		cy.verifyElementMessage('div[class^="hs_lastname"] label[class^="hs-error-msg"]', contactFieldMessage)

		cy.verifyElementMessage('div[class^="hs_email"] label[class^="hs-error-msg"]', contactFieldMessage)

		cy.verifyElementMessage(
			'div[class^="hs_country__new_"] label[class^="hs-error-msg"]',
			'Please select an option from the dropdown menu.'
		)

		cy.verifyElementMessage(
			'div[class^="hs_error_rollup"] label[class="hs-main-font-element"]',
			'Please complete all required fields.'
		)
	}
}
export default ContactUs_PO
