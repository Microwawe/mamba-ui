import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-weather1',
	templateUrl: './weather1.component.html',
})
export class Weather1Component extends BaseComponent {
	constructor() {
		super();
	}
}
