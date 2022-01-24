import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-review-showcase',
	templateUrl: './review-showcase.component.html',
})
export class ReviewShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
