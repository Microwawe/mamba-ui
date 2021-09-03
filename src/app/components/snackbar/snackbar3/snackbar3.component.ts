import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-snackbar3',
	templateUrl: './snackbar3.component.html',
})
export class Snackbar3Component extends BaseComponent {
	constructor() {
		super();
	}
}
