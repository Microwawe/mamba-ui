import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'custom-sections',
	templateUrl: './sections.component.html',
})
export class SectionsComponent implements OnInit {
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
		'snackbar',
		'stats',
		'steps',
		'team',
		'testimonial',
		// 'timeline',
	];

	constructor() {}

	ngOnInit() {}
}
