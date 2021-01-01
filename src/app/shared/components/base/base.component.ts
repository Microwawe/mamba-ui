import {Component, OnDestroy} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';

import {CustomInjector} from '@core/injector/custom-injector.service';
import {ColorService} from '@core/services/color.service';
import {ThemeService} from '@core/services/theme.service';

@Component({
	template: '',
})
export class BaseComponent implements OnDestroy {
	darkTheme!: boolean;
	combinedSub: Subscription;

	btn = 'py-3 px-8 rounded text-lg';

	primary = '';
	primaryLight = '';
	primaryDark = '';
	primary50 = '';
	primary100 = '';
	primary200 = '';
	primary300 = '';
	primary400 = '';
	primary500 = '';
	primary600 = '';
	primary700 = '';
	primary800 = '';
	primary900 = '';
	plain = '-coolGray-400';
	plainInv = '-coolGray-600';
	neutral = '-coolGray-700';
	neutralInv = '-coolGray-300';
	default = '-coolGray-800';
	defaultInv = '-coolGray-100';
	contrast = '-coolGray-900';
	contrastInv = '-coolGray-200';
	dark = '-gray-900';
	light = '-gray-100';

	protected colorService: ColorService;
	protected themeService: ThemeService;

	constructor() {
		const injector = CustomInjector.getInstance();
		this.colorService = injector.get(ColorService);
		this.themeService = injector.get(ThemeService);

		this.combinedSub = combineLatest([
			this.themeService.getDarkTheme(),
			this.colorService.observeCurrentColor(),
		]).subscribe(([theme, color]) => {
			this.darkTheme = theme;
			this.setPrimaryColor(color);
			this.setGrayscale();
		});
	}

	setGrayscale() {
		this.plain = this.darkTheme ? '-coolGray-600' : '-coolGray-400';
		this.plainInv = this.darkTheme ? '-coolGray-400' : '-coolGray-600';
		this.neutral = this.darkTheme ? '-coolGray-700' : '-coolGray-300';
		this.neutralInv = this.darkTheme ? '-coolGray-300' : '-coolGray-700';
		this.default = this.darkTheme ? '-coolGray-800' : '-coolGray-100';
		this.defaultInv = this.darkTheme ? '-coolGray-100' : '-coolGray-800';
		this.contrast = this.darkTheme ? '-coolGray-900' : '-coolGray-50';
		this.contrastInv = this.darkTheme ? '-coolGray-50' : '-coolGray-900';
	}

	setPrimaryColor(color: string) {
		this.primaryLight = this.darkTheme ? `-${color}-200` : `-${color}-300`;
		this.primary = this.darkTheme ? `-${color}-400` : `-${color}-500`;
		this.primaryDark = this.darkTheme ? `-${color}-600` : `-${color}-700`;
		this.primary50 = `-${color}-50`;
		this.primary100 = `-${color}-100`;
		this.primary200 = `-${color}-200`;
		this.primary300 = `-${color}-300`;
		this.primary400 = `-${color}-400`;
		this.primary500 = `-${color}-500`;
		this.primary600 = `-${color}-600`;
		this.primary700 = `-${color}-700`;
		this.primary800 = `-${color}-800`;
		this.primary900 = `-${color}-900`;
	}

	ngOnDestroy(): void {
		this.combinedSub.unsubscribe();
	}
}
