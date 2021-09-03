import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-skeleton2',
	templateUrl: './skeleton2.component.html',
})
export class Skeleton2Component extends BaseComponent {
	constructor() {
		super();
	}
}
