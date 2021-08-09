import {Component, OnInit} from '@angular/core';

import {environment} from '@env';
import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@shared/services/analytics.service';

@Component({
	selector: 'custom-home',
	templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
	roundedComponentTotal: number;

	constructor(private analytics: AnalyticsService) {
		super();
		this.roundedComponentTotal = environment.roundedComponentTotal;
	}

	ngOnInit() {}

	clickCTA() {
		this.analytics.triggerEvent(PlausibleEvent.CTA);
	}

	clickLink(target: string) {
		this.analytics.triggerEvent(PlausibleEvent.EXTERNAL_LINK, {
			link: target,
			component: 'home',
		});
	}
}
