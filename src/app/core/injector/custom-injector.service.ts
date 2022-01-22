import {Injector} from '@angular/core';
import {ColorService} from '../services/color.service';
import {ThemeService} from '../services/theme.service';

export class CustomInjector {
	private static injector: Injector | undefined;

	static getInstance(): Injector {
		if (!CustomInjector.injector) {
			CustomInjector.injector = Injector.create({
				providers: [
					{provide: ColorService, deps: []},
					{provide: ThemeService, deps: []},
				],
			});
		}

		return CustomInjector.injector;
	}

	static setInjector(injector: Injector): void {
		CustomInjector.injector = injector;
	}

	static getInjector(): Injector {
		return CustomInjector.injector || Injector.create({providers: []});
	}
}
