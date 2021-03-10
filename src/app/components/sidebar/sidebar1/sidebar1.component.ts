import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-sidebar1',
	templateUrl: './sidebar1.component.html',
})
export class Sidebar1Component extends BaseComponent {
	constructor() {
		super();
	}
}
