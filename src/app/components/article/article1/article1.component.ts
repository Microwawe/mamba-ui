import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-article1',
	templateUrl: './article1.component.html',
})
export class Article1Component extends BaseComponent {
	constructor() {
		super();
	}
}
