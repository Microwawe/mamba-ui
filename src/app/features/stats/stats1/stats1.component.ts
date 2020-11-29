import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-stats1',
	templateUrl: './stats1.component.html',
})
export class Stats1Component extends BaseComponent implements OnInit {
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
