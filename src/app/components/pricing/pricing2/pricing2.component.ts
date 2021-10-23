import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-pricing2',
	templateUrl: './pricing2.component.html',
})
export class Pricing2Component extends BaseComponent {
	categories = [
		{title: 'Personal', price: '0€'},
		{title: 'Professional', price: '8€'},
		{title: 'Enterprise', price: '19€'},
	];
	constructor() {
		super();
	}
}
