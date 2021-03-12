import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer2',
	templateUrl: './footer2.component.html',
})
export class Footer2Component extends BaseComponent {
	year: number;
	constructor() {
		super();
		this.year = new Date().getFullYear();
	}
}
