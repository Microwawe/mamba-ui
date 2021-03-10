import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-profile1',
	templateUrl: './profile1.component.html',
})
export class Profile1Component extends BaseComponent {
	constructor() {
		super();
	}
}
