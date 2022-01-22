import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-testimonial-showcase',
	templateUrl: './testimonial-showcase.component.html',
})
export class TestimonialShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
