import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-blog1',
	templateUrl: './blog1.component.html',
})
export class Blog1Component extends BaseComponent {
	constructor() {
		super();
	}
}
