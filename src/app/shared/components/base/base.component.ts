import {Component, OnDestroy, inject} from '@angular/core';
import {Subscription} from 'rxjs';

import {ThemeService} from '@shared/services/theme.service';
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
	prose = 'prose';

	protected themeService: ThemeService;

	constructor() {
		this.themeService = inject(ThemeService);

		this.combinedBaseSub = this.themeService.getCurrentTheme().subscribe((theme: any) => {
			this.darkTheme = theme.darkTheme;
			this.primary = theme.primary;
			this.primaryLight = theme.primaryLight;
			this.primaryDark = theme.primaryDark;
			this.primaryAlt = theme.primaryAlt;
			this.plain = theme.plain;
			this.plainInv = theme.plainInv;
			this.neutral = theme.neutral;
			this.neutralInv = theme.neutralInv;
			this.default = theme.default;
			this.defaultInv = theme.defaultInv;
			this.contrast = theme.contrast;
			this.contrastInv = theme.contrastInv;
			this.dark = theme.dark;
			this.light = theme.light;
			this.prose = theme.prose;
		});
	}

	ngOnDestroy(): void {
		this.combinedBaseSub.unsubscribe();
	}
}
