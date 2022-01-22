import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-skeleton-loader-showcase',
	templateUrl: './skeleton-loader-showcase.component.html',
})
export class SkeletonLoaderShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
