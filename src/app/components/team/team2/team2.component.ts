import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-team2',
	templateUrl: './team2.component.html',
})
export class Team2Component extends BaseComponent {
	constructor() {
		super();
	}
}
