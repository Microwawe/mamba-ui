import {Type} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import './commands';
import {MountConfig, mount} from 'cypress/angular';
import {AnalyticsService} from '@shared/services/analytics.service';
import {ThemeService} from '@shared/services/theme.service';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount;
		}
	}
}

const imports: any[] = [];
const declarations: any[] = [];
const providers: any[] = [AnalyticsService, ThemeService, HttpClient, HttpHandler];

function customMount<T>(component: string | Type<T>, config?: MountConfig<T>) {
	if (!config) {
		config = {imports, providers, declarations};
	} else {
		config.imports = [...(config?.imports || []), ...imports];
		config.declarations = [...(config?.declarations || []), ...declarations];
		config.providers = [...(config?.providers || []), ...providers];
	}
	return mount<T>(component, config);
}

Cypress.Commands.add('mount', customMount);
