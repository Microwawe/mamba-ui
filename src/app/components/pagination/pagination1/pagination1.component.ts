import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-pagination1',
	templateUrl: './pagination1.component.html',
})
export class Pagination1Component extends BaseComponent {
	constructor() {
		super();
	}
}
