import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-loading2',
	templateUrl: './loading2.component.html',
})
export class Loading2Component extends BaseComponent {
	constructor() {
		super();
	}
}
