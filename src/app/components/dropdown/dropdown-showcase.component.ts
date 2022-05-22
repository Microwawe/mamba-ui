import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-dropdown-showcase',
	templateUrl: './dropdown-showcase.component.html',
})
export class DropdownShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
