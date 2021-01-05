import {Component, OnDestroy} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';

import {CustomInjector} from '@core/injector/custom-injector.service';
import {ColorService} from '@core/services/color.service';
import {ThemeService} from '@core/services/theme.service';
import {TailwindColor} from '@shared/interfaces/tailwind-colors.interface';

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
	dark = '-coolGray-900';
	light = '-coolGray-100';

	protected colorService: ColorService;
	protected themeService: ThemeService;

	constructor() {
		const injector = CustomInjector.getInstance();
		this.colorService = injector.get(ColorService);
		this.themeService = injector.get(ThemeService);

		this.combinedSub = combineLatest([
			this.themeService.getDarkTheme(),
			this.colorService.getCurrentColor(),
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

	setPrimaryColor(color: TailwindColor) {
		this.primaryLight = this.darkTheme ? `-${color.name}-200` : `-${color.name}-300`;
		this.primary = this.darkTheme ? `-${color.name}-400` : `-${color.name}-500`;
		this.primaryDark = this.darkTheme ? `-${color.name}-600` : `-${color.name}-700`;
		this.primary50 = `-${color.name}-50`;
		this.primary100 = `-${color.name}-100`;
		this.primary200 = `-${color.name}-200`;
		this.primary300 = `-${color.name}-300`;
		this.primary400 = `-${color.name}-400`;
		this.primary500 = `-${color.name}-500`;
		this.primary600 = `-${color.name}-600`;
		this.primary700 = `-${color.name}-700`;
		this.primary800 = `-${color.name}-800`;
		this.primary900 = `-${color.name}-900`;
	}

	ngOnDestroy(): void {
		this.combinedSub.unsubscribe();
	}
}
