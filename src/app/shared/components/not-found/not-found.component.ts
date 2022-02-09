import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@core/services/analytics.service';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
})
export class NotFoundComponent extends BaseComponent implements OnInit {
	constructor(private analytics: AnalyticsService) {
		super();
	}

	ngOnInit() {
		this.analytics.triggerEvent(PlausibleEvent.NOT_FOUND);
	}
}
