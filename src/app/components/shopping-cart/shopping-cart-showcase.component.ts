import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-shopping-cart-showcase',
	templateUrl: './shopping-cart-showcase.component.html',
})
export class ShoppingCartShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
