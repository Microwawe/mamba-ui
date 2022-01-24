import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-weather-showcase',
	templateUrl: './weather-showcase.component.html',
})
export class WeatherShowcaseComponent extends BaseComponent {
	constructor() {
		super();
	}
}
