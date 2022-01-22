import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-contact-showcase',
	templateUrl: './contact-showcase.component.html',
})
export class ContactShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
