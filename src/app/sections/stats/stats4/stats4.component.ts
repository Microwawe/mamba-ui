import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'custom-stats4',
	templateUrl: './stats4.component.html',
})
export class Stats4Component implements OnInit {
	stats = [
		{amount: '50+', label: 'Clients'},
		{amount: '89K', label: 'Followers on social media'},
		{amount: '3', label: 'Published books'},
		{amount: '8', label: 'TED talks'},
		{amount: '22', label: 'Years of experience'},
		{amount: '10+', label: 'Workshops'},
	];
	constructor() {}

	ngOnInit() {}
}
