import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-card1',
	templateUrl: './card1.component.html',
})
export class Card1Component extends BaseComponent {
	constructor() {
		super();
	}
}
