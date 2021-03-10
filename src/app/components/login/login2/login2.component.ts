import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-login2',
	templateUrl: './login2.component.html',
})
export class Login2Component extends BaseComponent {
	constructor() {
		super();
	}
}
