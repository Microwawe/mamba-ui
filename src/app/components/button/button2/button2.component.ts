import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-button2',
	templateUrl: './button2.component.html',
})
export class Button2Component extends BaseComponent {
	constructor() {
		super();
	}
}
