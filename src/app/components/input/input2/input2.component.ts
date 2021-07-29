import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-input2',
	templateUrl: './input2.component.html',
})
export class Input2Component extends BaseComponent {
	constructor() {
		super();
	}
}
