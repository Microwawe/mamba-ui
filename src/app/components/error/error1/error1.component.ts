import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-error1',
	templateUrl: './error1.component.html',
})
export class Error1Component extends BaseComponent {
	constructor() {
		super();
	}
}
