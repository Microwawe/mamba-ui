import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-contact',
	templateUrl: './contact.component.html',
})
export class ContactComponent extends BaseComponent {
	constructor(private location: Location) {
		super();
	}

	goBack(): void {
		this.location.back();
	}
}
