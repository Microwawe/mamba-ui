import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-gallery-showcase',
	templateUrl: './gallery-showcase.component.html',
})
export class GalleryShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
