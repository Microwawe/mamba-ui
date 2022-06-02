import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature5',
	templateUrl: './feature5.component.html',
})
export class Feature5Component extends BaseComponent {
	constructor() {
		super();
	}
}
