import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-header1',
	templateUrl: './header1.component.html',
})
export class Header1Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
