class HomePage_PO {
	visitHomepage() {
		cy.visit('/')
	}

	clickOnFinancialControl() {
		cy.get('a[href="/finance-esg/financial-control"]').click()
	}

	veryfyMenuButtonAreVisible() {
		cy.get('#masthead').contains('Banking').should('be.visible')
		cy.get('#masthead').contains('Insurance').should('be.visible')
		cy.get('#masthead').contains('Finance & ESG').should('be.visible')
		cy.get('#menu-item-29985').contains('Services').should('be.visible')
		cy.get('#masthead').contains('Partners').should('be.visible')
		cy.get('#masthead').contains('Company').should('be.visible')
		cy.get('#masthead').contains('Resources').should('be.visible')
	}

	clickOnGetInTouch() {
		cy.get('#masthead').contains('Get in touch').click()
	}
}
export default HomePage_PO
