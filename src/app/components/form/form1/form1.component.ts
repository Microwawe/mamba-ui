import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-form1',
	templateUrl: './form1.component.html',
})
export class Form1Component extends BaseComponent {
	constructor() {
		super();
	}
}
