import {Component} from '@angular/core';

import {environment} from '@env';
import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@shared/services/analytics.service';

@Component({
	selector: 'custom-home',
	templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {
	roundedComponentTotal: number;

	constructor(private analytics: AnalyticsService) {
		super();
		this.roundedComponentTotal = environment.roundedComponentTotal;
	}

	clickCTA(): void {
		this.analytics.triggerEvent(PlausibleEvent.CTA);
	}
}
