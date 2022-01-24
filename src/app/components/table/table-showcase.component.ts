import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table-showcase',
	templateUrl: './table-showcase.component.html',
})
export class TableShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
