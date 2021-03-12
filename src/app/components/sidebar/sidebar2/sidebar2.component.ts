import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-sidebar2',
	templateUrl: './sidebar2.component.html',
})
export class Sidebar2Component extends BaseComponent {
	constructor() {
		super();
	}
}
