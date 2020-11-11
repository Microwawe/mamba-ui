import {Component, OnInit} from '@angular/core';
import {TailwindColor} from '@core/services/color.service';
import {Observable} from 'rxjs';
import {BaseComponent} from '../base/base.component';

@Component({
	selector: 'custom-color-selector',
	templateUrl: './color-selector.component.html',
	styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent extends BaseComponent implements OnInit {
	selectedColor!: Observable<TailwindColor>;
	colors: TailwindColor[] = [];

	constructor() {
		super();
	}

	ngOnInit() {
		this.colors = this.colorService.colors;
		this.selectedColor = this.colorService.observeCurrentColor();
	}

	changeColor(color: TailwindColor) {
		this.colorService.setCurrentColor(color);
	}
}
