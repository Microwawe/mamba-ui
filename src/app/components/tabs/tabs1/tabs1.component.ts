import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-tabs1',
	templateUrl: './tabs1.component.html',
})
export class Tabs1Component extends BaseComponent {
	constructor() {
		super();
	}
}
