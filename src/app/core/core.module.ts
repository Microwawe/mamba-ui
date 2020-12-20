import {NgModule, Optional, SkipSelf} from '@angular/core';

import {ColorService} from './services/color.service';
import {ThemeService} from './services/theme.service';

@NgModule({
	imports: [],
	declarations: [],
	providers: [ColorService, ThemeService],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() core: CoreModule) {
		if (core) {
			throw new Error('You should import core module only in the root module');
		}
	}
}
