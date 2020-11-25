import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'custom-showcase',
	templateUrl: './showcase.component.html',
})
export class ShowcaseComponent implements OnInit {
	@Input() title = '';

	constructor() {}

	ngOnInit() {}
}
