import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-article3',
	templateUrl: './article3.component.html',
})
export class Article3Component extends BaseComponent {
	constructor() {
		super();
	}
}
