import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-templates',
	templateUrl: './templates.component.html',
})
export class TemplatesComponent extends BaseComponent {
	categories = [{name: 'business', count: 1}];

	constructor() {
		super();
	}
}
