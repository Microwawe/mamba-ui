import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-hero2',
	templateUrl: './hero2.component.html',
})
export class Hero2Component extends BaseComponent {
	constructor() {
		super();
	}
}
