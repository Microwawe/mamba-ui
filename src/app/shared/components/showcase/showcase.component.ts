import {AfterViewInit, Component, Input} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';
import {ethicalads} from 'src/assets/js/ads';

@Component({
	selector: 'custom-showcase',
	templateUrl: './showcase.component.html',
})
export class ShowcaseComponent extends BaseComponent implements AfterViewInit {
	@Input() title = '';

	constructor() {
		super();
	}

	ngAfterViewInit(): void {
		ethicalads.reload();
	}
}
