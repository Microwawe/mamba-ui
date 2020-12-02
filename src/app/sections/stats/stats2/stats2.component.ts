import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-stats2',
	templateUrl: './stats2.component.html',
})
export class Stats2Component extends BaseComponent implements OnInit {
	stats: Object[] = [
		{icon: 'cart', amount: '12 000', label: 'orders'},
		{icon: 'mood-very-good', amount: '7 500', label: 'New customers'},
		{icon: 'speedometer', amount: '125%', label: 'Growth'},
		{icon: 'touch-app', amount: '17%', label: 'Click rate'},
	];
	constructor() {
		super();
	}

	ngOnInit() {}
}
