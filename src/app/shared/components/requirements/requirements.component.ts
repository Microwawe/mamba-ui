import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';
import {Requires} from '@shared/enum/requires.enum';

@Component({
	selector: 'custom-requirements',
	templateUrl: './requirements.component.html',
})
export class RequirementsComponent extends BaseComponent implements OnInit {
	@Input() requires!: Requires;
	constructor() {
		super();
	}

	ngOnInit() {}
}
