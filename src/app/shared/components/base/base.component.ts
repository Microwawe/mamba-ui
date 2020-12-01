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
