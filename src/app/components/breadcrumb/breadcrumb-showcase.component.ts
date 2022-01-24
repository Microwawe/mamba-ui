import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-breadcrumb-showcase',
	templateUrl: './breadcrumb-showcase.component.html',
})
export class BreadcrumbShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
