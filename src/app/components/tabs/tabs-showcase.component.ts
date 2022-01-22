import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-tabs-showcase',
	templateUrl: './tabs-showcase.component.html',
})
export class TabsShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
