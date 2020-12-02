import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'custom-components',
	templateUrl: './components.component.html',
})
export class ComponentsComponent implements OnInit {
	categories = ['Button', 'Label', 'snackbar'];

	constructor() {}

	ngOnInit() {}
}
