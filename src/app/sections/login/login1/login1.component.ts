import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-login1',
	templateUrl: './login1.component.html',
})
export class Login1Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
