import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-hero3',
	templateUrl: './hero3.component.html',
})
export class Hero3Component extends BaseComponent {
	constructor() {
		super();
	}
}
