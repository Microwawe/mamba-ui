import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-header2',
	templateUrl: './header2.component.html',
})
export class Header2Component extends BaseComponent {
	constructor() {
		super();
	}
}
