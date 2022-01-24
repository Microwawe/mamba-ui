import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-header-showcase',
	templateUrl: './header-showcase.component.html',
})
export class HeaderShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
