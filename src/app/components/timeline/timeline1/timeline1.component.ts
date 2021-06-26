import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-timeline1',
	templateUrl: './timeline1.component.html',
})
export class Timeline1Component extends BaseComponent {
	constructor() {
		super();
	}
}
