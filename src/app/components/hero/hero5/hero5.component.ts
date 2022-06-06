import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-hero5',
	templateUrl: './hero5.component.html',
})
export class Hero5Component extends BaseComponent {
	constructor() {
		super();
	}
}
