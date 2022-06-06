import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-weather2',
	templateUrl: './weather2.component.html',
})
export class Weather2Component extends BaseComponent {
	constructor() {
		super();
	}
}
