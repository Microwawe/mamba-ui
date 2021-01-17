import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature7',
	templateUrl: './feature7.component.html',
})
export class Feature7Component extends BaseComponent implements OnInit {
	offerings = [
		'ea et neque distinctio',
		'quaerat obcaecati voluptatem ',
		'quas eius repudianda',
		'Free and MIT licensed',
		'Praesentium ea et neque distinctio',
		'Architecto beatae esse ab amet ',
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
