import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-button-showcase',
	templateUrl: './button-showcase.component.html',
})
export class ButtonShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
