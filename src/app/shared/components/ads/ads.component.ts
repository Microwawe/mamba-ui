import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import {ethicalads} from 'src/assets/js/ads';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'ads',
	templateUrl: './ads.component.html',
})
export class AdsComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('ad') ad: ElementRef | undefined;
	@Input() sticky: boolean = false;
	@Input() fixed: boolean = false;
	@Input() keyword = '';
	keywords = 'tailwind|tailwindcss|css|component|template|web development|webdev|document';
	interval;
	manuallyClosed = false;

	constructor() {
		super();
	}

	ngOnInit() {
		if (this.keyword) {
			this.keywords += '|' + this.keyword;
		}
	}

	ngAfterViewInit(): void {
		ethicalads.reload();
		this.refreshAdsInIntervalIfElementVisible();
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
	}

	refreshAdsInIntervalIfElementVisible() {
		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				clearInterval(this.interval);
				this.interval = setInterval(() => {
					if (!document.hidden && entry.isIntersecting) {
						ethicalads.reload();
					}
				}, 17000);
			});
		});

		if (this.ad) {
			observer.observe(this.ad.nativeElement);
		}
	}

	clickAd() {
		const linkElement = document.querySelector('.custom-ad a');
		if (linkElement) {
			const url = linkElement.getAttribute('href');
			if (url) {
				window.open(url, '_blank');
			}
		}
		clearInterval(this.interval);
		this.manuallyClosed = true;
	}
}
