import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-loading-showcase',
	templateUrl: './loading-showcase.component.html',
})
export class LoadingShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
