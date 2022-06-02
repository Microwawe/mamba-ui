import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-modal1',
	templateUrl: './modal1.component.html',
})
export class Modal1Component extends BaseComponent {
	constructor() {
		super();
	}
}
