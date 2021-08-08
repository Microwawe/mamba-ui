import {Component, OnDestroy} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {Category} from '@shared/interfaces/category.interface';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent extends BaseComponent implements OnDestroy {
	query = '';
	activeBgColor: String = 'bg' + this.neutral;
	disabledBgColor: String = 'bg' + this.neutral;
	themeSub;
	categoryTotal = 0;
	componentTotal = 0;
	categories: Category[] = [
		{name: 'Article', link: 'article', count: 3},
		{name: 'Avatar', link: 'avatar', count: 1},
		{name: 'Blog', link: 'blog', count: 7},
		{name: 'Button', link: 'button', count: 6},
		{name: 'Call to action', link: 'call-to-action', count: 6},
		{name: 'Contact', link: 'contact', count: 3},
		{name: 'Error', link: 'error', count: 2},
		{name: 'Faq', link: 'faq', count: 4},
		{name: 'Feature', link: 'feature', count: 8},
		{name: 'Footer', link: 'footer', count: 3}, // TODO
		{name: 'Form', link: 'form', count: 1},
		{name: 'Gallery', link: 'gallery', count: 1},
		{name: 'Header', link: 'header', count: 5},
		{name: 'Hero', link: 'hero', count: 5},
		{name: 'Input', link: 'input', count: 4},
		{name: 'Loading', link: 'loading', count: 2},
		{name: 'Login', link: 'login', count: 5},
		{name: 'Notification', link: 'notification', count: 3},
		{name: 'Pagination', link: 'pagination', count: 1},
		{name: 'Pricing', link: 'pricing', count: 4},
		{name: 'Profile', link: 'profile', count: 3},
		{name: 'Review', link: 'review', count: 3},
		{name: 'Shopping cart', link: 'shopping-cart', count: 3}, // TODO cleanup
		{name: 'Sidebar', link: 'sidebar', count: 3},
		{name: 'Stats', link: 'stats', count: 5}, // TODO cleanup
		{name: 'Steps', link: 'steps', count: 3},
		{name: 'Tab', link: 'tab', count: 2},
		{name: 'Team', link: 'team', count: 4},
		{name: 'Testimonial', link: 'testimonial', count: 5},
		{name: 'Timeline', link: 'timeline', count: 3}, // TODO
		{name: 'Toggle', link: 'toggle', count: 4},
		{name: 'Weather', link: 'weather', count: 2},
	];

	constructor() {
		super();
		this.categoryTotal = this.categories.length;
		this.componentTotal = this.categories
			.map(categ => categ.count)
			.reduce((acc, sum) => sum + acc, 0);
		this.themeSub = this.themeService.getDarkTheme().subscribe(isDarkmode => {
			this.activeBgColor = isDarkmode ? 'bg' + this.plain : 'bg' + this.contrast;
			this.disabledBgColor = isDarkmode ? 'bg' + this.default : 'bg' + this.neutral;
		});
	}

	updateQuery(queryString: string) {
		this.query = queryString;
	}

	ngOnDestroy() {
		this.themeSub.unsubscribe();
	}
}
