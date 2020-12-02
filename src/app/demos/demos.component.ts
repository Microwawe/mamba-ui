import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-demos',
	templateUrl: './demos.component.html',
})
export class DemosComponent extends BaseComponent implements OnInit {
	categories = [];

	constructor() {
		super();
	}

	ngOnInit() {}
}
