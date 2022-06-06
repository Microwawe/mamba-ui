import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-banner1',
	templateUrl: './banner1.component.html',
})
export class Banner1Component extends BaseComponent {
	constructor() {
		super();
	}
}
