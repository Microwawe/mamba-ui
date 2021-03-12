import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-blog2',
	templateUrl: './blog2.component.html',
})
export class Blog2Component extends BaseComponent {
	constructor() {
		super();
	}
}
