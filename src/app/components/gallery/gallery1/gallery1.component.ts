import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-gallery1',
	templateUrl: './gallery1.component.html',
})
export class Gallery1Component extends BaseComponent {
	constructor() {
		super();
	}
}
