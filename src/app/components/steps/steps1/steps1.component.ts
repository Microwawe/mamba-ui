import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-steps1',
	templateUrl: './steps1.component.html',
})
export class Steps1Component extends BaseComponent {
	constructor() {
		super();
	}
}
