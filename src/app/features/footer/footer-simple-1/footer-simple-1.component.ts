import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer-simple-1',
	templateUrl: './footer-simple-1.component.html',
	styleUrls: ['./footer-simple-1.component.scss'],
})
export class FooterSimple1Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
