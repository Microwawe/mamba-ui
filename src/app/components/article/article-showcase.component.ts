import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-article-showcase',
	templateUrl: './article-showcase.component.html',
})
export class ArticleShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
