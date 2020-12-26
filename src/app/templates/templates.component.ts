import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-templates',
	templateUrl: './templates.component.html',
})
export class TemplatesComponent extends BaseComponent implements OnInit {
	categories = [];

	constructor() {
		super();
	}

	ngOnInit() {}
}
