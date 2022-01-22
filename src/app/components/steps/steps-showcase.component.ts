import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-steps-showcase',
	templateUrl: './steps-showcase.component.html',
})
export class StepsShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
