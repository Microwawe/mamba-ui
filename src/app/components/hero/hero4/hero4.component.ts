import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-hero4',
	templateUrl: './hero4.component.html',
})
export class Hero4Component extends BaseComponent {
	constructor() {
		super();
	}
}
