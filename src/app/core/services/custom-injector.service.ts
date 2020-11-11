import {Injector} from '@angular/core';
import {ColorService} from './color.service';

export class CustomInjector {
	private static injector: Injector | undefined;

	constructor() {}

	public static getInstance(): Injector {
		if (!CustomInjector.injector) {
			console.log('created new instance');

			CustomInjector.injector = Injector.create({
				providers: [{provide: ColorService, deps: []}],
			});
		}

		return CustomInjector.injector;
	}
}
