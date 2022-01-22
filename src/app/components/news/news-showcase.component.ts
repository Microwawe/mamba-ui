import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-news-showcase',
	templateUrl: './news-showcase.component.html',
})
export class NewsShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
