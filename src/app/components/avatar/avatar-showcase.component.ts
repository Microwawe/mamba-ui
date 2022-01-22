import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-avatar-showcase',
	templateUrl: './avatar-showcase.component.html',
})
export class AvatarShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
