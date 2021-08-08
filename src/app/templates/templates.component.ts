import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {Category} from '@shared/interfaces/category.interface';

@Component({
	selector: 'custom-templates',
	templateUrl: './templates.component.html',
})
export class TemplatesComponent extends BaseComponent {
	categoryTotal = 0;
	componentTotal = 0;
	categories: Category[] = [
		{name: 'business', link: 'business', count: 2},
		{name: 'portfolio', link: 'portfolio', count: 1},
	];

	constructor() {
		super();
		this.categoryTotal = this.categories.length;
		this.componentTotal = this.categories
			.map(categ => categ.count)
			.reduce((acc, sum) => sum + acc, 0);
	}
}
