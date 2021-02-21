import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent extends BaseComponent implements OnInit {
	categories = [
		{name: 'avatar', count: 1},
		{name: 'blog', count: 3},
		{name: 'button', count: 5},
		{name: 'call-to-action', count: 6},
		{name: 'contact', count: 3},
		{name: 'error', count: 2},
		{name: 'faq', count: 3},
		{name: 'feature', count: 7},
		{name: 'footer', count: 2},
		{name: 'form', count: 1},
		{name: 'gallery', count: 1},
		{name: 'header', count: 5},
		{name: 'hero', count: 5},
		{name: 'login', count: 3},
		{name: 'pagination', count: 1},
		{name: 'pricing', count: 4}, // TODO
		{name: 'profile', count: 1},
		{name: 'review', count: 2},
		{name: 'snackbar', count: 2},
		{name: 'stats', count: 5},
		{name: 'steps', count: 3},
		// {name: 'tab', count: 1}, // TODO
		{name: 'team', count: 4},
		{name: 'testimonial', count: 4},
		{name: 'timeline', count: 1}, // TODO
		// {name: 'weather', count: 2}, // TODO
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
