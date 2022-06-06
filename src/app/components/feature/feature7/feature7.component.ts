import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature7',
	templateUrl: './feature7.component.html',
})
export class Feature7Component extends BaseComponent {
	offerings = [
		'Ea et neque distinctio',
		'Quaerat obcaecati voluptatem ',
		'Quas eius repudianda',
		'Free and MIT licensed',
		'Praesentium ea et neque distinctio',
		'Architecto beatae esse ab amet ',
	];

	constructor() {
		super();
	}
}
