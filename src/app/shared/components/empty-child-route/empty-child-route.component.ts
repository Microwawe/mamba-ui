import {AfterViewInit, Component} from '@angular/core';
import {ethicalads} from 'src/assets/js/ads';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-empty-child-route',
	templateUrl: './empty-child-route.component.html',
})
export class EmptyChildRouteComponent extends BaseComponent implements AfterViewInit {
	constructor() {
		super();
	}

	ngAfterViewInit(): void {
		ethicalads.reload();
	}
}
