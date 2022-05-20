import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-weather3',
	templateUrl: './weather3.component.html',
})
export class Weather3Component extends BaseComponent {
	constructor() {
		super();
	}
}
