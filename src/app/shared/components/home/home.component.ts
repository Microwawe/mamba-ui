import {AfterViewInit, Component} from '@angular/core';
import {ethicalads} from 'src/assets/js/ads';

import {environment} from '@env';
import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@core/services/analytics.service';

@Component({
	selector: 'custom-home',
	templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements AfterViewInit {
	roundedComponentTotal: number;

	constructor(private analytics: AnalyticsService) {
		super();
		this.roundedComponentTotal = environment.roundedComponentTotal;
	}

	ngAfterViewInit(): void {
		ethicalads.reload();
	}

	clickCTA(): void {
		this.analytics.triggerEvent(PlausibleEvent.CTA);
	}
}
