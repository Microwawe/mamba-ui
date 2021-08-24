import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer-showcase',
	templateUrl: './footer-showcase.component.html',
})
export class FooterShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
