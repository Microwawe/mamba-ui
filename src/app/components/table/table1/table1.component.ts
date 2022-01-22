import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table1',
	templateUrl: './table1.component.html',
})
export class Table1Component extends BaseComponent {
	constructor() {
		super();
	}
}
