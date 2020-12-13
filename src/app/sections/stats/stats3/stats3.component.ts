import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-stats3',
	templateUrl: './stats3.component.html',
})
export class Stats3Component extends BaseComponent implements OnInit {
	stats: Object[] = [
		{icon: 'layers', amount: '12 000+', label: 'Projects'},
		{icon: 'group', amount: '7 500+', label: 'Customers'},
		{icon: 'badge', amount: '14', label: 'Awards'},
		{icon: 'history', amount: '24/7h', label: 'Support'},
		{icon: 'loop-circular', amount: '99.9%', label: 'Uptime'},
		{icon: 'mug', amount: '720L', label: 'Coffee'},
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
