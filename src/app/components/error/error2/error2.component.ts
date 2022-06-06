import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-error2',
	templateUrl: './error2.component.html',
})
export class Error2Component extends BaseComponent {
	constructor() {
		super();
	}
}
