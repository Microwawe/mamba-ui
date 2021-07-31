import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-button4',
	templateUrl: './button4.component.html',
})
export class Button4Component extends BaseComponent {
	constructor() {
		super();
	}
}
