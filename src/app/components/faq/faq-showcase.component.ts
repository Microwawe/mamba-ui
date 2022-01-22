import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-faq-showcase',
	templateUrl: './faq-showcase.component.html',
})
export class FaqShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
