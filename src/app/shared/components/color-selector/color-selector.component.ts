import {Component, OnInit} from '@angular/core';

import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-color-selector',
	templateUrl: './color-selector.component.html',
	styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent extends BaseComponent implements OnInit {
	colors: string[] = [];

	constructor() {
		super();
	}

	ngOnInit() {
		this.colors = [
			'yellow',
			'amber',
			'orange',
			'red',
			'rose',
			'pink',
			'fuchsia',
			'purple',
			'violet',
			'indigo',
			'blue',
			'lightBlue',
			'cyan',
			'teal',
			'emerald',
			'green',
			'lime',
		];
	}

	changeColor(color: string) {
		// this.themeService.setPrimaryColor(color);
		this.colorService.setCurrentColorString(color);
	}
}
