import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
	afterNextRender,
} from '@angular/core';
// import {ethicalads} from 'src/assets/js/ads';
import {BaseComponent} from '../base/base.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
	selector: 'ads',
	templateUrl: './ads.component.html',
})
export class AdsComponent extends BaseComponent implements OnInit, OnDestroy {
	@ViewChild('ad') ad: ElementRef | undefined;
	@Input() sticky: boolean = false;
	@Input() fixed: boolean = false;
	@Input() keyword = '';
	keywords =
		'pdf|document|aws|gcp|azure|database|search|ai|scalable|serverless|cloud|devops|docker|kubernetes|microservices|mysql|postgresql|postgres|oauth|ml|react|angular|vue';
	interval;
	routerSubscription;
	manuallyClosed = false;
	lastNavigationTime = 0;
	minViewTimeMs = 2000;
	maxViewTimeMs = 8000;

	constructor(private router: Router) {
		super();
		afterNextRender(() => {
			// ethicalads.reload();
			this.refreshAdsInIntervalIfElementVisible();
		});
	}

	ngOnInit() {
		if (this.keyword) {
			this.keywords += '|' + this.keyword;
		}

		this.routerSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				const currentTime = Date.now();
				if (currentTime - this.lastNavigationTime > this.minViewTimeMs) {
					// ethicalads.reload();
					this.manuallyClosed = false;
					this.lastNavigationTime = currentTime;
				}
			}
		});
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
		this.routerSubscription.unsubscribe();
	}

	refreshAdsInIntervalIfElementVisible() {
		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				clearInterval(this.interval);
				this.interval = setInterval(() => {
					if (entry.isIntersecting) {
						// ethicalads.reload();
					}
				}, this.maxViewTimeMs);
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
