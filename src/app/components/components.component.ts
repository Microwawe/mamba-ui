import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent implements OnInit {
	categories = ['button', 'label', 'snackbar'];

	constructor() {}

	ngOnInit() {}
}
