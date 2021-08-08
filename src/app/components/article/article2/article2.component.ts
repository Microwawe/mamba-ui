import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-article2',
	templateUrl: './article2.component.html',
})
export class Article2Component extends BaseComponent {
	constructor() {
		super();
	}
}
