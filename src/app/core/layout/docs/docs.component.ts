import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-docs',
	templateUrl: './docs.component.html',
})
export class DocsComponent extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
