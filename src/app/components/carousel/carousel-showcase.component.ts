import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-carousel-showcase',
	templateUrl: './carousel-showcase.component.html',
})
export class CarouselShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
