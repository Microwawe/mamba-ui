import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature-showcase',
	templateUrl: './feature-showcase.component.html',
})
export class FeatureShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
