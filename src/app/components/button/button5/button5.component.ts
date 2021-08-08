import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-button5',
	templateUrl: './button5.component.html',
})
export class Button5Component extends BaseComponent {
	constructor() {
		super();
	}
}
