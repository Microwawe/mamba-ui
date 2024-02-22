import {Component} from '@angular/core';

import {environment} from '@env';
import {BaseComponent} from '@shared/components/base/base.component';
import {PlausibleEvent} from '@shared/enum/plausible.event.enum';
import {AnalyticsService} from '@core/services/analytics.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-layout',
	templateUrl: './layout.component.html',
})
export class LayoutComponent extends BaseComponent {
	isDarkTheme!: Observable<boolean>;

	ngOnInit(): void {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}
}
