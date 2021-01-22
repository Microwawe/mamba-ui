import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/components/base/base.component';

@Component({
	selector: 'custom-avatar1',
	templateUrl: './avatar1.component.html',
})
export class Avatar1Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
