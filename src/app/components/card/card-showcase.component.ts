import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-card-showcase',
	templateUrl: './card-showcase.component.html',
})
export class CardShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
