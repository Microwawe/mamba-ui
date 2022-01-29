import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table1',
	templateUrl: './table1.component.html',
})
export class Table1Component extends BaseComponent {
	rows = [
		{
			char: 'A',
			subrows: [
				{
					name: 'Dwight Adams',
					title: 'UI Designer',
					company: 'Spirit Media',
					phone: '555-873-9812',
					email: 'dwight@adams.com',
					address: '71 Cherry Court, SO',
					country: 'United Kingdom',
				},
				{
					name: 'Richie Allen',
					title: 'Geothermal Technician',
					company: 'Icecorps',
					phone: '555-129-0761',
					email: 'richie@allen.com',
					address: 'Knesebeckstrasse 32, Obersteinebach',
					country: 'Germany',
				},
			],
		},
		{
			char: 'B',
			subrows: [
				{
					name: 'Alex Bridges',
					title: 'Administrative Services Manager',
					company: 'Smilectronics',
					phone: '555-238-9890',
					email: 'alex@bridges.com',
					address: 'Hooivelden 117, Kortrijk',
					country: 'Belgium',
				},
				{
					name: 'Lynette Brown',
					title: 'Camera Operator',
					company: 'Surge Enterprises',
					phone: '555-521-5712',
					email: 'lynette@brown.com',
					address: '22 rue de la Boétie, Poitiers',
					country: 'France',
				},
			],
		},
		{
			char: 'C',
			subrows: [
				{
					name: 'Mariah Claxton',
					title: 'Nuclear Technician',
					company: 'White Wolf Brews',
					phone: '555-654-9810',
					email: 'mariah@claxton.com',
					address: 'R Oliveirinhas 71, Maia',
					country: 'Portugal',
				},
				{
					name: 'Hermila Craig',
					title: 'Production Engineer',
					company: 'Cavernetworks Co.',
					phone: '555-091-8401',
					email: 'hermila@craig.com',
					address: 'Rua da Rapina 89, Espeja',
					country: 'Spain',
				},
			],
		},
	];
	constructor() {
		super();
	}
}
