import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-timeline-showcase',
	templateUrl: './timeline-showcase.component.html',
})
export class TimelineShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
