import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-button3',
	templateUrl: './button3.component.html',
})
export class Button3Component extends BaseComponent {
	constructor() {
		super();
	}
}
