import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-cart1',
	templateUrl: './cart1.component.html',
})
export class Cart1Component extends BaseComponent {
	products = [
		{
			name: 'Polaroid camera',
			img:
				'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
			oldPrice: '75.50€',
			price: '59.99€',
			color: 'Classic',
		},
		{
			name: 'Replica headphones',
			img:
				'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
			oldPrice: '150€',
			price: '99.95€',
			color: 'White',
		},
		{
			name: 'Set of travel chargers',
			img:
				'https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
			oldPrice: '15.99€',
			price: '8.99€',
			color: 'Black',
		},
	];
	constructor() {
		super();
	}
}
