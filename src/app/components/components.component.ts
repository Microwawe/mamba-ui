import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent extends BaseComponent {
	categories = [
		{name: 'Avatar', link: 'avatar', count: 1},
		{name: 'Blog', link: 'blog', count: 7},
		{name: 'Button', link: 'button', count: 5},
		{name: 'Call to action', link: 'call-to-action', count: 6},
		{name: 'Contact', link: 'contact', count: 3},
		{name: 'Error', link: 'error', count: 2},
		{name: 'Faq', link: 'faq', count: 3},
		{name: 'Feature', link: 'feature', count: 7},
		{name: 'Footer', link: 'footer', count: 3}, // TODO
		{name: 'Form', link: 'form', count: 1},
		{name: 'Gallery', link: 'gallery', count: 1},
		{name: 'Header', link: 'header', count: 5},
		{name: 'Hero', link: 'hero', count: 5},
		{name: 'Login', link: 'login', count: 3},
		{name: 'Pagination', link: 'pagination', count: 1},
		{name: 'Pricing', link: 'pricing', count: 4},
		// {name: 'Product', link: 'product', count: 2}, // TODO
		{name: 'Profile', link: 'profile', count: 3},
		{name: 'Review', link: 'review', count: 2},
		{name: 'Shopping cart', link: 'shopping-cart', count: 3}, // TODO cleanup
		{name: 'Sidebar', link: 'sidebar', count: 3},
		{name: 'Snackbar', link: 'snackbar', count: 2},
		{name: 'Stats', link: 'stats', count: 6}, // TODO cleanup
		{name: 'Steps', link: 'steps', count: 3},
		// {name: 'Tab', link: 'tab', count: 1}, // TODO
		{name: 'Team', link: 'team', count: 4},
		{name: 'Testimonial', link: 'testimonial', count: 5},
		{name: 'Timeline', link: 'timeline', count: 1}, // TODO
		{name: 'Weather', link: 'weather', count: 2},
	];

	constructor() {
		super();
	}
}
