import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-button1',
	templateUrl: './button1.component.html',
})
export class Button1Component extends BaseComponent {
	constructor() {
		super();
	}
}
