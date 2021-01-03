import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-docs',
	templateUrl: './docs.component.html',
})
export class DocsComponent extends BaseComponent implements OnInit {
	categories = [
		{name: 'Get started', link: '/docs'},
		{name: 'General', link: 'general'},
		{name: 'Roadmap', link: 'roadmap'},
		{name: 'Credits', link: 'credits'},
		{name: 'Privacy', link: 'privacy'},
	];
	selectedCategory = this.categories[0];

	constructor() {
		super();
	}

	ngOnInit() {}
}
