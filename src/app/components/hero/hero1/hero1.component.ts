import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-hero1',
	templateUrl: './hero1.component.html',
})
export class Hero1Component extends BaseComponent {
	constructor() {
		super();
	}
}
