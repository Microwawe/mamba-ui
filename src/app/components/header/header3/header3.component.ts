import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-header3',
	templateUrl: './header3.component.html',
})
export class Header3Component extends BaseComponent {
	constructor() {
		super();
	}
}
