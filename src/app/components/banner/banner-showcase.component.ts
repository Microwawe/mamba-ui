import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-banner-showcase',
	templateUrl: './banner-showcase.component.html',
})
export class BannerShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
