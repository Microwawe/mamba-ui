import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ethicalads} from 'src/assets/js/ads';

@Component({
	selector: 'ads',
	templateUrl: './ads.component.html',
})
export class AdsComponent implements OnInit, OnDestroy {
	@Input() sticky: boolean = false;
	@Input() fixed: boolean = false;
	@Input() keyword = '';
	keywords = 'tailwind|tailwindcss|css|component|template|web development';
	interval;

	constructor() {}

	ngOnInit() {
		if (this.keyword) {
			this.keywords += '|' + this.keyword;
		}
		ethicalads.reload();
		this.interval = setInterval(() => {
			ethicalads.reload();
		}, 17000);
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
	}
}
