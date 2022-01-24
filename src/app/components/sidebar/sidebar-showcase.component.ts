import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-sidebar-showcase',
	templateUrl: './sidebar-showcase.component.html',
})
export class SidebarShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
