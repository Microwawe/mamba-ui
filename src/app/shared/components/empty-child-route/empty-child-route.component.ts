import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-empty-child-route',
	templateUrl: './empty-child-route.component.html',
})
export class EmptyChildRouteComponent extends BaseComponent {
	constructor() {
		super();
	}
}
