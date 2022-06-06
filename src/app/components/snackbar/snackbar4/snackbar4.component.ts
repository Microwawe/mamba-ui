import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-snackbar4',
	templateUrl: './snackbar4.component.html',
})
export class Snackbar4Component extends BaseComponent {
	constructor() {
		super();
	}
}
