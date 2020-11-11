import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-hero-showcase',
	templateUrl: './hero-showcase.component.html',
	styleUrls: ['./hero-showcase.component.scss'],
})
export class HeroShowcaseComponent extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
