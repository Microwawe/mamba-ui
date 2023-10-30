import {AnalyticsService} from '@core/services/analytics.service';
import {FormatterService} from '@core/services/formatter.service';
import {FullscreenModalService} from '@core/services/fullscreen.modal.service';
import {ShowCodeComponent} from '@shared/components/show-code/show-code.component';
import {selectors} from 'cypress/support/selectors';

const providers = [FullscreenModalService, FormatterService, AnalyticsService];
const config = {
	providers,
};

describe('ShowCodeComponent', () => {
	beforeEach(() => {
		cy.mount(ShowCodeComponent, config);
	});

	it('should show preview by default', () => {
		cy.get(selectors.showcode.showPreviewButton).should('not.have.class', 'bg-transparent');
		cy.get(selectors.showcode.showHtmlButton).should('have.class', 'bg-transparent');
		cy.get(selectors.showcode.showVueButton).should('have.class', 'bg-transparent');
		cy.get(selectors.showcode.showJsxButton).should('have.class', 'bg-transparent');
	});

	it('should be able to show html', () => {
		cy.get(selectors.showcode.showHtmlButton).click();
		cy.get(selectors.showcode.showPreviewButton).should('have.class', 'bg-transparent');
		cy.get(selectors.showcode.showHtmlButton).should('not.have.class', 'bg-transparent');
		cy.get(selectors.showcode.showVueButton).should('have.class', 'bg-transparent');
		cy.get(selectors.showcode.showJsxButton).should('have.class', 'bg-transparent');
	});
});
