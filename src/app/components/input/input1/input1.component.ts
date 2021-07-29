import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-input1',
	templateUrl: './input1.component.html',
})
export class Input1Component extends BaseComponent {
	constructor() {
		super();
	}
}
