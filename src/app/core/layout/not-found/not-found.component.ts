import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
})
export class NotFoundComponent extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
