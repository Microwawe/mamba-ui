import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-contact1',
	templateUrl: './contact1.component.html',
})
export class Contact1Component extends BaseComponent {
	constructor() {
		super();
	}
}
