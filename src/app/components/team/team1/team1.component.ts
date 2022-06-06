import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-team1',
	templateUrl: './team1.component.html',
})
export class Team1Component extends BaseComponent {
	constructor() {
		super();
	}
}
