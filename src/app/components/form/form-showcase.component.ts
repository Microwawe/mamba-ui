import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-form-showcase',
	templateUrl: './form-showcase.component.html',
})
export class FormShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
