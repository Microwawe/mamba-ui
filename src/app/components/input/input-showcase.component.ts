import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-input-showcase',
	templateUrl: './input-showcase.component.html',
})
export class InputShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
