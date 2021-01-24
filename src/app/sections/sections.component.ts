import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-sections',
	templateUrl: './sections.component.html',
})
export class SectionsComponent extends BaseComponent implements OnInit {
	categories = [
		{name: 'blog', count: 2},
		{name: 'call-to-action', count: 6},
		{name: 'contact', count: 2},
		{name: 'faq', count: 2},
		{name: 'feature', count: 5},
		{name: 'footer', count: 2},
		{name: 'form', count: 1},
		{name: 'gallery', count: 1},
		{name: 'header', count: 2},
		{name: 'hero', count: 2},
		{name: 'login', count: 1},
		{name: 'pricing', count: 3},
		{name: 'stats', count: 4},
		{name: 'steps', count: 2},
		{name: 'team', count: 2},
		{name: 'testimonial', count: 3},
		{name: 'timeline', count: 1},
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
