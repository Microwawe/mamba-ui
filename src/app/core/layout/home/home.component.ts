import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-home',
	templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
	stats = [
		{amount: '50+', label: 'Components'},
		{amount: '20+', label: 'Sections'},
		{amount: '10+', label: 'Templates'},
		{amount: '100%', label: 'Free'},
		{amount: '1', label: 'Developer'},
		{amount: '0', label: 'Github Stars'},
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
