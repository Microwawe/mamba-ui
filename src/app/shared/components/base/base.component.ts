import {Component, OnDestroy} from '@angular/core';
import {ColorService} from '@core/services/color.service';
import {CustomInjector} from '@core/services/custom-injector.service';
import {Subscription} from 'rxjs';

@Component({
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnDestroy {
	bgPrimary = '';
	textPrimary = '';
	borderPrimary = '';
	currentColorSub: Subscription;

	protected colorService: ColorService;

	constructor() {
		const injector = CustomInjector.getInstance();
		this.colorService = injector.get(ColorService);

		this.currentColorSub = this.colorService.observeCurrentColor().subscribe(color => {
			this.bgPrimary = `bg-${color?.name}-${color?.shade}`;
			this.textPrimary = `text-${color?.name}-${color?.shade}`;
			this.borderPrimary = `border-${color?.name}-${color?.shade}`;
		});
	}

	ngOnDestroy(): void {
		this.currentColorSub.unsubscribe();
	}
}
