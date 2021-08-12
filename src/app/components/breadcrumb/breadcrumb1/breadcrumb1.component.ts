import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-breadcrumb1',
	templateUrl: './breadcrumb1.component.html',
})
export class Breadcrumb1Component extends BaseComponent {
	constructor() {
		super();
	}
}
