import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-timeline2',
	templateUrl: './timeline2.component.html',
})
export class Timeline2Component extends BaseComponent {
	constructor() {
		super();
	}
}
