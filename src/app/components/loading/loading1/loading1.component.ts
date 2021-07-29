import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-loading1',
	templateUrl: './loading1.component.html',
})
export class Loading1Component extends BaseComponent {
	constructor() {
		super();
	}
}
