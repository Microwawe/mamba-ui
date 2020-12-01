import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-snackbar1',
	templateUrl: './snackbar1.component.html',
})
export class Snackbar1Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
