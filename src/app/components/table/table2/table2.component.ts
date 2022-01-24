import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table2',
	templateUrl: './table2.component.html',
})
export class Table2Component extends BaseComponent {
	constructor() {
		super();
	}
}
