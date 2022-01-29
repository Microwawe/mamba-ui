import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table2',
	templateUrl: './table2.component.html',
})
export class Table2Component extends BaseComponent {
	rows = [
		{
			invoice: '97412378923',
			client: 'Microsoft Corporation',
			issued: '14 Jan 2022',
			due: '01 Feb 2022',
			amount: '15,792',
			status: 'Pending',
		},
		{
			invoice: '97412378923',
			client: 'Tesla Inc.',
			issued: '14 Jan 2022',
			due: '01 Feb 2022',
			amount: '275',
			status: 'Pending',
		},
		{
			invoice: '97412378923',
			client: 'Coca Cola co.',
			issued: '14 Jan 2022',
			due: '01 Feb 2022',
			amount: '8,950,500',
			status: 'Pending',
		},
		{
			invoice: '97412378923',
			client: 'Nvidia Corporation',
			issued: '14 Jan 2022',
			due: '01 Feb 2022',
			amount: '98,218',
			status: 'Pending',
		},
	];
	constructor() {
		super();
	}
}
