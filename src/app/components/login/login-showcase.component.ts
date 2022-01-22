import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-login-showcase',
	templateUrl: './login-showcase.component.html',
})
export class LoginShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
