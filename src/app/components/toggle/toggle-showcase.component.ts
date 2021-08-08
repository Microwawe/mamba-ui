import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-toggle-showcase',
	templateUrl: './toggle-showcase.component.html',
})
export class ToggleShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
