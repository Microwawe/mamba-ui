import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent extends BaseComponent implements OnInit {
	//categories = ['button', 'label', 'snackbar', 'tab'];
	categories = [];

	constructor() {
		super();
	}

	ngOnInit() {}
}
