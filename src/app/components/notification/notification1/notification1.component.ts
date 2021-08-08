import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-notification1',
	templateUrl: './notification1.component.html',
})
export class Notification1Component extends BaseComponent {
	constructor() {
		super();
	}
}
