import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {Category} from '@shared/interfaces/category.interface';

@Component({
	selector: 'custom-templates',
	templateUrl: './templates.component.html',
})
export class TemplatesComponent extends BaseComponent {
	categories: Category[] = [
		{name: 'business', link: 'business', count: 2},
		{name: 'portfolio', link: 'portfolio', count: 2},
	];

	constructor() {
		super();
	}
}
