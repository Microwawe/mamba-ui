import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-error-showcase',
	templateUrl: './error-showcase.component.html',
})
export class ErrorShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
