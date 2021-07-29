import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-toggle1',
	templateUrl: './toggle1.component.html',
})
export class Toggle1Component extends BaseComponent {
	constructor() {
		super();
	}
}
