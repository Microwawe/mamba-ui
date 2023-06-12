import {SettingsComponent} from '@shared/components/settings/settings.component';
import {selectors} from 'cypress/support/selectors';

const numberOfTailwindColors = 17;

describe('SettingsComponent', () => {
	beforeEach(() => {
		cy.mount(SettingsComponent);
	});

	it('should be closed, have darkmode on and violet color by default', () => {
		cy.get(selectors.settings.component).should('have.class', '-translate-x-full');
		cy.get(selectors.settings.darkModeToggle).should('be.checked');
		cy.get(selectors.settings.selectedColorName).contains('violet', {matchCase: false});
	});

	it('should have all the Tailwind CSS colors available', () => {
		cy.get(selectors.settings.colorGrid)
			.find('button')
			.should('have.length', numberOfTailwindColors);
	});

	it('should be able to be opened', () => {
		cy.get(selectors.settings.toggleOpenButton).click();
		cy.get(selectors.settings.component).should('have.class', 'translate-x-0');
	});

	it('should be able to select other colors', () => {
		cy.get(selectors.settings.toggleOpenButton).click();
		cy.get(selectors.settings.colorGrid).find('button').first().click();
		cy.get(selectors.settings.selectedColorName).contains('red', {matchCase: false});
	});

	it('should be able to toggle darkmode', () => {
		cy.get(selectors.settings.toggleOpenButton).click();
		cy.get(selectors.settings.darkModeToggle).click();
		cy.get(selectors.settings.darkModeToggle).should('not.be.checked');
	});

	it('should be able to be closed', () => {
		cy.get(selectors.settings.toggleOpenButton).click();
		cy.get(selectors.settings.toggleOpenButton).click();
		cy.get(selectors.settings.component).should('have.class', '-translate-x-full');
	});
});
