import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-stats4',
	templateUrl: './stats4.component.html',
})
export class Stats4Component extends BaseComponent {
	stats = [
		{amount: '50+', label: 'Clients'},
		{amount: '89K', label: 'Followers on social media'},
		{amount: '3', label: 'Published books'},
		{amount: '8', label: 'TED talks'},
		{amount: '22', label: 'Years of experience'},
		{amount: '10+', label: 'Workshops'},
	];
	constructor() {
		super();
	}
}
