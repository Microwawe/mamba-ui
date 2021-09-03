import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer1',
	templateUrl: './footer1.component.html',
})
export class Footer1Component extends BaseComponent {
	constructor() {
		super();
	}
}
