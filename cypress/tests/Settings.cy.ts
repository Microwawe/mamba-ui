import {SettingsComponent} from '@shared/components/settings/settings.component';

const numberOfTailwindColors = 17;

describe('SettingsComponent', () => {
	beforeEach(() => {
		cy.mount(SettingsComponent);
	});

	it('should be closed by default', () => {
		cy.get('[data-cy=settings-component]').should('have.class', '-translate-x-full');
	});

	it('should have violet as the default color', () => {
		cy.get('[data-cy=settings-selected-color]').contains('violet', {matchCase: false});
	});

	it('should have dark mode by default', () => {
		cy.get('[data-cy=settings-dark-mode-toggle]').should('be.checked');
	});

	it('should have all the Tailwind CSS colors available', () => {
		cy.get('[data-cy=settings-colors-grid]')
			.find('button')
			.should('have.length', numberOfTailwindColors);
	});

	it('should be able to be opened', () => {
		cy.get('[data-cy=settings-toggle]').click();
		cy.get('[data-cy=settings-component]').should('have.class', 'translate-x-0');
	});

	it('should be able to select other colors', () => {
		cy.get('[data-cy=settings-toggle]').click();
		cy.get('[data-cy=settings-colors-grid]').find('button').first().click();
		cy.get('[data-cy=settings-selected-color]').contains('red', {matchCase: false});
	});

	it('should be able to toggle darkmode', () => {
		cy.get('[data-cy=settings-toggle]').click();
		cy.get('[data-cy=settings-dark-mode-toggle]').click();
		cy.get('[data-cy=settings-dark-mode-toggle]').should('not.be.checked');
	});

	it('should be able to be closed', () => {
		cy.get('[data-cy=settings-toggle]').click();
		cy.get('[data-cy=settings-toggle]').click();
		cy.get('[data-cy=settings-component]').should('have.class', '-translate-x-full');
	});
});
