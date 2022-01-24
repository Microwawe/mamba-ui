import {Component, Input} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-showcase',
	templateUrl: './showcase.component.html',
})
export class ShowcaseComponent extends BaseComponent {
	@Input() title = '';

	constructor() {
		super();
	}
}
