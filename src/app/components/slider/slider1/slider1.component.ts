import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-slider1',
	templateUrl: './slider1.component.html',
})
export class Slider1Component extends BaseComponent {
	constructor() {
		super();
	}
}
