import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-toggle2',
	templateUrl: './toggle2.component.html',
})
export class Toggle2Component extends BaseComponent {
	constructor() {
		super();
	}
}
