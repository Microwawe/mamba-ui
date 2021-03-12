import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-portfolio1',
	templateUrl: './portfolio1.component.html',
})
export class Portfolio1Component extends BaseComponent implements OnInit {
	year = new Date().getFullYear();
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

	ngOnInit() {}
}
