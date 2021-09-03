import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-skeleton1',
	templateUrl: './skeleton1.component.html',
})
export class Skeleton1Component extends BaseComponent {
	constructor() {
		super();
	}
}
