import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from '@env';
import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@shared/services/analytics.service';

@Component({
	selector: 'custom-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent extends BaseComponent implements OnInit {
	currentYear!: number;
	isDarkTheme!: Observable<boolean>;
	roundedComponentTotal: number;

	constructor(private analytics: AnalyticsService) {
		super();
		this.roundedComponentTotal = environment.roundedComponentTotal;
	}

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
		this.isDarkTheme = this.themeService.getDarkTheme();
	}

	toggleDarkTheme(dark: boolean) {
		this.themeService.setDarkTheme(dark);
	}

	clickLink(link: string) {
		this.analytics.triggerEvent(PlausibleEvent.EXTERNAL_LINK, {
			link: link,
			component: 'footer',
		});
	}
}
