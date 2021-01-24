import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-template1',
	templateUrl: './template1.component.html',
})
export class Template1Component extends BaseComponent implements OnInit {
	icons: string[] = [
		'intel',
		'digital-ocean',
		'dell',
		'epson',
		'epic-games',
		'fedex',
		'foursquare',
		'sonos',
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
