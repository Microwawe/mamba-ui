import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-contact3',
	templateUrl: './contact3.component.html',
})
export class Contact3Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
