import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-docs',
	templateUrl: './docs.component.html',
})
export class DocsComponent extends BaseComponent {
	categories = [
		{name: 'Get started', link: '/docs'},
		{name: 'General', link: 'general'},
		{name: 'Roadmap', link: 'roadmap'},
		{name: 'Credits', link: 'credits'},
	];
	selectedCategory = this.categories[0];

	constructor() {
		super();
	}
}
