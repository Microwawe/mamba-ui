import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-slider-showcase',
	templateUrl: './slider-showcase.component.html',
})
export class SliderShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
