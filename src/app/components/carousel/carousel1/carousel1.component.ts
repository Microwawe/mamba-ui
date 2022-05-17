import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-carousel1',
	templateUrl: './carousel1.component.html',
})
export class Carousel1Component extends BaseComponent {
	constructor() {
		super();
	}
}
