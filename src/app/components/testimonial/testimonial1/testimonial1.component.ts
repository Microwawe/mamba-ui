import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-testimonial1',
	templateUrl: './testimonial1.component.html',
})
export class Testimonial1Component extends BaseComponent {
	constructor() {
		super();
	}
}
