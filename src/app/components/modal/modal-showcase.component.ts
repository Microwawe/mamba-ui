import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-modal-showcase',
	templateUrl: './modal-showcase.component.html',
})
export class ModalShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
