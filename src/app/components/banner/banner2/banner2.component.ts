import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-banner2',
	templateUrl: './banner2.component.html',
})
export class Banner2Component extends BaseComponent {
	constructor() {
		super();
	}
}
