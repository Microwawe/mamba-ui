import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-faq1',
	templateUrl: './faq1.component.html',
})
export class Faq1Component extends BaseComponent {
	constructor() {
		super();
	}
}
