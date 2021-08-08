import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-toggle3',
	templateUrl: './toggle3.component.html',
})
export class Toggle3Component extends BaseComponent {
	constructor() {
		super();
	}
}
