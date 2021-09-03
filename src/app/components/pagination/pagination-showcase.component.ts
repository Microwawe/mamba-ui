import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-pagination-showcase',
	templateUrl: './pagination-showcase.component.html',
})
export class PaginationShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
