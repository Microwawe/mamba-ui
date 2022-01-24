import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-team-showcase',
	templateUrl: './team-showcase.component.html',
})
export class TeamShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
