import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-notification2',
	templateUrl: './notification2.component.html',
})
export class Notification2Component extends BaseComponent {
	constructor() {
		super();
	}
}
