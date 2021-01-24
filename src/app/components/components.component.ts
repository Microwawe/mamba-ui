import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent extends BaseComponent implements OnInit {
	categories = [
		{name: 'avatar', count: 1},
		{name: 'button', count: 3},
		{name: 'pagination', count: 1},
		{name: 'snackbar', count: 2},
		// {name: 'tab', count: 1},
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
