import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-card2',
	templateUrl: './card2.component.html',
})
export class Card2Component extends BaseComponent {
	constructor() {
		super();
	}
}
