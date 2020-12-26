import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-sections',
	templateUrl: './sections.component.html',
})
export class SectionsComponent extends BaseComponent implements OnInit {
	categories = [
		'blog',
		'call-to-action',
		'contact',
		'faq',
		'feature',
		'footer',
		'form',
		'header',
		'hero',
		'login',
		'pricing',
		'stats',
		'steps',
		'team',
		'testimonial',
		'timeline',
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
