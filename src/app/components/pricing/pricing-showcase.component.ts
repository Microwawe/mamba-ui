import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-pricing-showcase',
	templateUrl: './pricing-showcase.component.html',
})
export class PricingShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
