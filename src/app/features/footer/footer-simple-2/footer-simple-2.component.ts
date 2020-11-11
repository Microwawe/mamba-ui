import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-footer-simple-2',
	templateUrl: './footer-simple-2.component.html',
	styleUrls: ['./footer-simple-2.component.scss'],
})
export class FooterSimple2Component extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
