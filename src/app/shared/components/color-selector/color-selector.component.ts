import {Component, OnInit} from '@angular/core';
import {TailwindColor} from '@core/services/color.service';
import {Colors, ThemeService} from '@core/services/theme.service';
import {Observable} from 'rxjs';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-color-selector',
	templateUrl: './color-selector.component.html',
	styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent extends BaseComponent implements OnInit {
	colors: string[] = [];

	constructor(private themeService: ThemeService) {
		super();
	}

	ngOnInit() {
		this.colors = [
			'yellow',
			'orange',
			'red',
			'pink',
			'purple',
			'indigo',
			'blue',
			'teal',
			'green',
		];
	}

	changeColor(color: string) {
		this.themeService.setPrimaryColor(color);
		//this.colorService.setCurrentColor(color);
	}
}
