import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColorService, TailwindColor} from '@core/services/color.service';
import {CustomInjector} from '@core/services/custom-injector.service';
import {Observable, Subscription} from 'rxjs';

@Component({
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnDestroy {
	primaryBackground = '';
	primaryText = '';
	primaryBorder = '';
	currentColorSub: Subscription;

	protected colorService: ColorService;

	constructor() {
		const injector = CustomInjector.getInstance();
		this.colorService = injector.get(ColorService);

		this.currentColorSub = this.colorService
			.observeCurrentColor()
			.subscribe(color => {
				this.primaryBackground = `bg-${color?.name}-${color?.shade}`;
				this.primaryText = `text-${color?.name}-${color?.shade}`;
				this.primaryBorder = `border-${color?.name}-${color?.shade}`;
			});
	}

	ngOnDestroy(): void {
		this.currentColorSub.unsubscribe();
	}
}
