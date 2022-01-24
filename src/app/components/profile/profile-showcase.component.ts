import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-profile-showcase',
	templateUrl: './profile-showcase.component.html',
})
export class ProfileShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
