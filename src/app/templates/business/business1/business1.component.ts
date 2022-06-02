import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-business1',
	templateUrl: './business1.component.html',
})
export class Business1Component extends BaseComponent {
	constructor() {
		super();
	}
}
