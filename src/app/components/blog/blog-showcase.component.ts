import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-blog-showcase',
	templateUrl: './blog-showcase.component.html',
})
export class BlogShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
