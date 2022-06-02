import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature4',
	templateUrl: './feature4.component.html',
})
export class Feature4Component extends BaseComponent {
	constructor() {
		super();
	}
}
