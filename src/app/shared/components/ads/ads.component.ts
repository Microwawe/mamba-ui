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

@Component({
	selector: 'ads',
	templateUrl: './ads.component.html',
})
export class AdsComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('ad') ad: ElementRef | undefined;
	@Input() sticky: boolean = false;
	@Input() fixed: boolean = false;
	@Input() keyword = '';
	keywords =
		'angular|reactjs|vuejs|frontend|javascript|typescript|css|tailwindcss|aws|database|security|redis|testing|ai';
	interval;

	constructor() {}

	ngOnInit() {
		if (this.keyword) {
			this.keywords += '|' + this.keyword;
		}
		ethicalads.reload();
	}

	ngAfterViewInit(): void {
		this.refreshAdsInIntervalIfElementVisible();
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
	}

	refreshAdsInIntervalIfElementVisible() {
		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				clearInterval(this.interval);
				if (entry.isIntersecting) {
					this.interval = setInterval(() => {
						ethicalads.reload();
					}, 17000);
				}
			});
		});

		observer.observe(this.ad?.nativeElement);
	}
}
