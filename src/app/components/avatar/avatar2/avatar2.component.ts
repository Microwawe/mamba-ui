import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-avatar2',
	templateUrl: './avatar2.component.html',
})
export class Avatar2Component extends BaseComponent {
	constructor() {
		super();
	}
}
