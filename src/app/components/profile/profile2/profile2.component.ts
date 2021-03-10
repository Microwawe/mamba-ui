import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-profile2',
	templateUrl: './profile2.component.html',
})
export class Profile2Component extends BaseComponent {
	constructor() {
		super();
	}
}
