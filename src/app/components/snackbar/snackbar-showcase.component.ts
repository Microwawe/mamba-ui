import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-snackbar-showcase',
	templateUrl: './snackbar-showcase.component.html',
})
export class SnackbarShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
