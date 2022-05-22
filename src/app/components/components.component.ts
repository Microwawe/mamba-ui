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
		{name: 'Article', link: 'article', count: 4, tags: ['content']},
		{name: 'Avatar', link: 'avatar', count: 3},
		{name: 'Banner', link: 'banner', count: 2, tags: ['promo bar']},
		{name: 'Blog', link: 'blog', count: 7, tags: ['content']},
		{name: 'Breadcrumb', link: 'breadcrumb', count: 2, tags: ['navigation']},
		{name: 'Button', link: 'button', count: 6},
		{name: 'Call to action', link: 'call-to-action', count: 6, tags: ['cta', 'newsletter']},
		{name: 'Card', link: 'card', count: 5},
		{name: 'Carousel', link: 'carousel', count: 2},
		{name: 'Contact', link: 'contact', count: 3, tags: ['input']},
		{name: 'Dropdown', link: 'dropdown', count: 3, tags: ['button', 'menu', 'navigation']}, // TODO fix overflow-x in mobile
		{name: 'Error', link: 'error', count: 2, tags: ['404', '500', 'offline']},
		{name: 'Faq', link: 'faq', count: 5}, // TODO FAQ6
		{name: 'Feature', link: 'feature', count: 8, tags: ['content', 'incentives']},
		{name: 'Footer', link: 'footer', count: 5},
		{name: 'Form', link: 'form', count: 1, tags: ['input']},
		{name: 'Gallery', link: 'gallery', count: 2},
		{name: 'Header', link: 'header', count: 5, tags: ['navigation', 'navbar', 'menu']},
		{name: 'Hero', link: 'hero', count: 5, tags: ['content']},
		{name: 'Input', link: 'input', count: 4},
		{name: 'Loading', link: 'loading', count: 2},
		{name: 'Login', link: 'login', count: 5},
		{name: 'Modal', link: 'modal', count: 4, tags: ['dialog']},
		{name: 'News', link: 'news', count: 3},
		{name: 'Pagination', link: 'pagination', count: 3},
		{name: 'Pricing', link: 'pricing', count: 5},
		{name: 'Profile', link: 'profile', count: 4},
		{name: 'Review', link: 'review', count: 3},
		{name: 'Shopping cart', link: 'shopping-cart', count: 2, tags: ['e-commerce', 'ecommerce']},
		{name: 'Sidebar', link: 'sidebar', count: 3, tags: ['menu']},
		{
			name: 'Skeleton loader',
			link: 'skeleton-loader',
			count: 2,
			tags: ['spinner', 'loading', 'card'],
		},
		{name: 'Slider', link: 'slider', count: 2, tags: ['range', 'input', 'bar']},
		{
			name: 'Snackbar',
			link: 'snackbar',
			count: 6,
			tags: ['tooltip', 'pop-up', 'notification', 'alert'],
		},
		{name: 'Stats', link: 'stats', count: 5, tags: ['logo cloud']},
		{name: 'Steps', link: 'steps', count: 4},
		{name: 'Table', link: 'table', count: 4, tags: ['list']},
		{name: 'Tabs', link: 'tab', count: 3},
		{name: 'Team', link: 'team', count: 4},
		{name: 'Testimonial', link: 'testimonial', count: 5},
		{name: 'Timeline', link: 'timeline', count: 4},
		{name: 'Toggle', link: 'toggle', count: 4, tags: ['input']},
		{name: 'Weather', link: 'weather', count: 3, tags: ['card']},
	].sort((a, b) => a.name.localeCompare(b.name));

	constructor() {
		super();
		this.categoryTotal = this.categories.length;
		this.componentTotal = this.categories
			.map(categ => categ.count)
			.reduce((acc, sum) => sum + acc, 0);
		this.themeSub = this.themeService.getDarkTheme().subscribe((isDarkmode: boolean) => {
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
