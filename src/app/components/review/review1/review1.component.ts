import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-review1',
	templateUrl: './review1.component.html',
})
export class Review1Component extends BaseComponent {
	constructor() {
		super();
	}
}
