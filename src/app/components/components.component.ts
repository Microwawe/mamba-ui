import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {BaseComponent} from '@shared/components/base/base.component';
import {Category} from '@shared/interfaces/category.interface';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent extends BaseComponent implements OnDestroy {
	query = '';
	activeBgColor: string = 'bg' + this.neutral;
	disabledBgColor: string = 'bg' + this.neutral;
	themeSub: Subscription;
	categoryTotal = 0;
	componentTotal = 0;
	categories: Category[] = [
		{name: 'Article', link: 'article', count: 4},
		{name: 'Avatar', link: 'avatar', count: 3},
		{name: 'Blog', link: 'blog', count: 7},
		{name: 'Breadcrumb', link: 'breadcrumb', count: 2},
		{name: 'Button', link: 'button', count: 6},
		{name: 'Call to action', link: 'call-to-action', count: 6},
		{name: 'Card', link: 'card', count: 4}, // TODO
		{name: 'Contact', link: 'contact', count: 3},
		{name: 'Error', link: 'error', count: 2},
		{name: 'Faq', link: 'faq', count: 4},
		{name: 'Feature', link: 'feature', count: 8},
		{name: 'Footer', link: 'footer', count: 5},
		{name: 'Form', link: 'form', count: 1},
		{name: 'Gallery', link: 'gallery', count: 1},
		{name: 'Header', link: 'header', count: 5},
		{name: 'Hero', link: 'hero', count: 5},
		{name: 'Input', link: 'input', count: 4},
		{name: 'Loading', link: 'loading', count: 2},
		{name: 'Login', link: 'login', count: 4},
		{name: 'News', link: 'news', count: 3},
		{name: 'Pagination', link: 'pagination', count: 3},
		{name: 'Pricing', link: 'pricing', count: 5},
		{name: 'Profile', link: 'profile', count: 4},
		{name: 'Review', link: 'review', count: 3},
		{name: 'Shopping cart', link: 'shopping-cart', count: 2},
		{name: 'Sidebar', link: 'sidebar', count: 3},
		{name: 'Skeleton loader', link: 'skeleton-loader', count: 2},
		{name: 'Snackbar', link: 'snackbar', count: 3},
		{name: 'Stats', link: 'stats', count: 5},
		{name: 'Steps', link: 'steps', count: 4},
		{name: 'Tabs', link: 'tab', count: 3},
		{name: 'Team', link: 'team', count: 4},
		{name: 'Testimonial', link: 'testimonial', count: 5},
		{name: 'Timeline', link: 'timeline', count: 3},
		{name: 'Toggle', link: 'toggle', count: 4},
		{name: 'Weather', link: 'weather', count: 2},
	].sort((a, b) => a.name.localeCompare(b.name));

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

	updateQuery(queryString: string): void {
		this.query = queryString;
	}

	ngOnDestroy(): void {
		this.themeSub.unsubscribe();
	}
}
