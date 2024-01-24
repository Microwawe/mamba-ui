import {Component, OnDestroy, inject} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';

import {ColorService} from '@shared/services/color.service';
import {ThemeService} from '@shared/services/theme.service';
import {TailwindColor} from '@shared/interfaces/tailwind-colors.interface';
import {Requires} from '@shared/enum/requires.enum';

@Component({
	template: '',
})
export class BaseComponent implements OnDestroy {
	darkTheme!: boolean;
	combinedBaseSub: Subscription;
	enum = {
		requires: Requires,
	};

	primary = '';
	primaryLight = '';
	primaryDark = '';
	primaryAlt = '';
	// primary50 = '';
	// primary100 = '';
	// primary200 = '';
	// primary300 = '';
	// primary400 = '';
	// primary500 = '';
	// primary600 = '';
	// primary700 = '';
	// primary800 = '';
	// primary900 = '';
	plain = '-gray-400';
	plainInv = '-gray-600';
	neutral = '-gray-700';
	neutralInv = '-gray-300';
	default = '-gray-800';
	defaultInv = '-gray-100';
	contrast = '-gray-900';
	contrastInv = '-gray-200';
	dark = '-gray-900';
	light = '-gray-100';

	protected colorService: ColorService;
	protected themeService: ThemeService;

	constructor() {
		this.colorService = inject(ColorService);
		this.themeService = inject(ThemeService);

		this.combinedBaseSub = combineLatest([
			this.themeService.getDarkTheme(),
			this.colorService.getCurrentColor(),
		]).subscribe(([theme, color]: [boolean, TailwindColor]) => {
			this.darkTheme = theme;
			this.setPrimaryColor(color);
			this.setGrayscale();
		});
	}

	setGrayscale(): void {
		this.plain = this.darkTheme ? '-gray-600' : '-gray-400';
		this.plainInv = this.darkTheme ? '-gray-400' : '-gray-600';
		this.neutral = this.darkTheme ? '-gray-700' : '-gray-300';
		this.neutralInv = this.darkTheme ? '-gray-300' : '-gray-700';
		this.default = this.darkTheme ? '-gray-800' : '-gray-100';
		this.defaultInv = this.darkTheme ? '-gray-100' : '-gray-800';
		this.contrast = this.darkTheme ? '-gray-900' : '-gray-50';
		this.contrastInv = this.darkTheme ? '-gray-50' : '-gray-900';
	}

	setPrimaryColor(color: TailwindColor): void {
		this.primaryLight = this.darkTheme ? `-${color.name}-300` : `-${color.name}-500`;
		this.primary = this.darkTheme ? `-${color.name}-400` : `-${color.name}-600`;
		this.primaryAlt = this.darkTheme ? `-${color.name}-600` : `-${color.name}-400`;
		this.primaryDark = this.darkTheme ? `-${color.name}-500` : `-${color.name}-700`;
		// this.primary50 = `-${color.name}-50`;
		// this.primary100 = `-${color.name}-100`;
		// this.primary200 = `-${color.name}-200`;
		// this.primary300 = `-${color.name}-300`;
		// this.primary400 = `-${color.name}-400`;
		// this.primary500 = `-${color.name}-500`;
		// this.primary600 = `-${color.name}-600`;
		// this.primary700 = `-${color.name}-700`;
		// this.primary800 = `-${color.name}-800`;
		// this.primary900 = `-${color.name}-900`;
	}

	ngOnDestroy(): void {
		this.combinedBaseSub.unsubscribe();
	}
}
