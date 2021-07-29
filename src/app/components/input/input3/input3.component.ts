import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-input3',
	templateUrl: './input3.component.html',
})
export class Input3Component extends BaseComponent {
	constructor() {
		super();
	}
}
