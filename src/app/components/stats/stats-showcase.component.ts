import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-stats-showcase',
	templateUrl: './stats-showcase.component.html',
})
export class StatsShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
