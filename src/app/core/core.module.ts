import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ThemeService} from './services/theme.service';

@NgModule({
	imports: [],
	declarations: [],
	providers: [ThemeService],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() core: CoreModule) {
		if (core) {
			throw new Error('You should import core module only in the root module');
		}
	}
}
