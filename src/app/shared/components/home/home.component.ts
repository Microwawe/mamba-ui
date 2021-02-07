import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@shared/services/analytics.service';

@Component({
	selector: 'custom-home',
	templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
	constructor(private analytics: AnalyticsService) {
		super();
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
