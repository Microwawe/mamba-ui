import {NgModule, Optional, SkipSelf} from '@angular/core';
import {AnalyticsService} from './services/analytics.service';

import {ColorService} from './services/color.service';
import {FormatterService} from './services/formatter.service';
import {FullscreenModalService} from './services/fullscreen.modal.service';
import {MenuService} from './services/menu.service';
import {ThemeService} from './services/theme.service';

@NgModule({
	imports: [],
	declarations: [],
	providers: [
		ColorService,
		ThemeService,
		MenuService,
		AnalyticsService,
		FormatterService,
		FullscreenModalService,
	],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() core: CoreModule) {
		if (core) {
			throw new Error('You should import core module only in the root module');
		}
	}
}
