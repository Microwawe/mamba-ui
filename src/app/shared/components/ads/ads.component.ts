import {
	AfterViewInit,
	Component,
	ElementRef,
	Inject,
	Input,
	OnDestroy,
	OnInit,
	PLATFORM_ID,
	ViewChild,
} from '@angular/core';
import ethicalads from 'src/assets/js/ads';
import {BaseComponent} from '../base/base.component';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
	selector: 'ads',
	templateUrl: './ads.component.html',
})
export class AdsComponent extends BaseComponent implements AfterViewInit, OnDestroy {
	@Input() sticky: boolean = false;
	@Input() fixed: boolean = false;
	@Input() showcase: boolean = false;
	@Input() keyword = '';
	@ViewChild('fixedAd') fixedAd: ElementRef | undefined;
	@ViewChild('stickyAd') stickyAd: ElementRef | undefined;
	@ViewChild('showcaseAd') showcaseAd: ElementRef | undefined;

	keywords =
		'pdf|document|aws|gcp|azure|database|search|ai|scalable|serverless|cloud|devops|docker|kubernetes|microservices|mysql|postgresql|postgres|oauth|ml|react|angular|vue';
	interval;
	routerSubscription;
	manuallyClosed = false;
	lastNavigationTime = 0;
	minViewTimeMs = 2000;
	maxViewTimeMs = 8000;

	constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
		super();
	}

	ngAfterViewInit() {
		if (this.keyword) {
			this.keywords += '|' + this.keyword;
		}

		if (isPlatformBrowser(this.platformId)) {
			ethicalads.reload();
			this.routerSubscription = this.router.events.subscribe(event => {
				if (event instanceof NavigationEnd) {
					const currentTime = Date.now();
					if (currentTime - this.lastNavigationTime > this.minViewTimeMs) {
						ethicalads.reload();
						this.manuallyClosed = false;
						this.lastNavigationTime = currentTime;
					}
				}
			});
			this.refreshAdsInIntervalIfElementVisible();
		}
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
		if (this.routerSubscription) {
			this.routerSubscription?.unsubscribe();
		}
	}

	refreshAdsInIntervalIfElementVisible() {
		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				clearInterval(this.interval);
				this.interval = setInterval(() => {
					if (entry.isIntersecting) {
						ethicalads.reload();
					}
				}, this.maxViewTimeMs);
			});
		});

		if (this.fixedAd) {
			observer.observe(this.fixedAd.nativeElement);
		}
		if (this.stickyAd) {
			observer.observe(this.stickyAd.nativeElement);
		}
		if (this.showcaseAd) {
			observer.observe(this.showcaseAd.nativeElement);
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
