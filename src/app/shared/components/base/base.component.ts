import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {ColorService} from '@core/services/color.service';
import {CustomInjector} from '@core/services/custom-injector.service';

@Component({
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnDestroy {
	btn = 'py-3 px-8 rounded text-lg';
	bgPrimary = '';
	textPrimary = '';
	borderPrimary = '';
	ringPrimary = '';
	currentColorSub: Subscription;

	protected colorService: ColorService;

	constructor() {
		const injector = CustomInjector.getInstance();
		this.colorService = injector.get(ColorService);

		this.currentColorSub = this.colorService.observeCurrentColor().subscribe(color => {
			this.bgPrimary = `bg-${color}-500`;
			this.textPrimary = `text-${color}-500`;
			this.borderPrimary = `border-${color}-500`;
			this.ringPrimary = `ring-${color}-500`;
		});
	}

	ngOnDestroy(): void {
		this.currentColorSub.unsubscribe();
	}
}
