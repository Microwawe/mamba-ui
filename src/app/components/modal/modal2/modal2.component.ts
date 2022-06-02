import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-modal2',
	templateUrl: './modal2.component.html',
})
export class Modal2Component extends BaseComponent {
	constructor() {
		super();
	}
}
