import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature2',
	templateUrl: './feature2.component.html',
})
export class Feature2Component extends BaseComponent {
	constructor() {
		super();
	}
}
