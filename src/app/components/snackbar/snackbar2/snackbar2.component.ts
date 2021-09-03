import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-snackbar2',
	templateUrl: './snackbar2.component.html',
})
export class Snackbar2Component extends BaseComponent {
	constructor() {
		super();
	}
}
