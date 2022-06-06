import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature3',
	templateUrl: './feature3.component.html',
})
export class Feature3Component extends BaseComponent {
	constructor() {
		super();
	}
}
