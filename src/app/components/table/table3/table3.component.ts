import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table3',
	templateUrl: './table3.component.html',
})
export class Table3Component extends BaseComponent {
	teams = [
		{
			name: 'MIA',
			wins: '31',
			losses: '17',
			winprc: '.646',
			behind: '0',
			home: '17-5',
			away: '14-12',
			last10: '8-2',
			streak: 'W2',
		},
		{
			name: 'CHI',
			wins: '30',
			losses: '17',
			winprc: '.638',
			behind: '0.5',
			home: '17-6',
			away: '13-11',
			last10: '4-6',
			streak: 'W2',
		},
		{
			name: 'CLE',
			wins: '30',
			losses: '19',
			winprc: '.612',
			behind: '1.5',
			home: '15-9',
			away: '15-10',
			last10: '7-3',
			streak: 'W3',
		},
		{
			name: 'BKN',
			wins: '29',
			losses: '19',
			winprc: '.604',
			behind: '2',
			home: '12-13',
			away: '17-6',
			last10: '4-6',
			streak: 'L3',
		},
		{
			name: 'MIL',
			wins: '30',
			losses: '20',
			winprc: '.600',
			behind: '2',
			home: '17-8',
			away: '13-12',
			last10: '5-5',
			streak: 'L1',
		},
		{
			name: 'PHI',
			wins: '28',
			losses: '19',
			winprc: '.596',
			behind: '2.5',
			home: '11-10',
			away: '17-9',
			last10: '7-3',
			streak: 'W2',
		},
		{
			name: 'CHA',
			wins: '27',
			losses: '22',
			winprc: '.551',
			behind: '4.5',
			home: '13-7',
			away: '14-15',
			last10: '7-3',
			streak: 'W1',
		},
		{
			name: 'BOS',
			wins: '25',
			losses: '24',
			winprc: '.510',
			behind: '6.5',
			home: '16-10',
			away: '9-14',
			last10: '7-3',
			streak: 'W2',
		},
		{
			name: 'TOW',
			wins: '23',
			losses: '23',
			winprc: '.500',
			behind: '7',
			home: '13-12',
			away: '10-11',
			last10: '4-6',
			streak: 'L1',
		},
		{
			name: 'WAS',
			wins: '23',
			losses: '25',
			winprc: '.479',
			behind: '8',
			home: '13-12',
			away: '10-12',
			last10: '4-6',
			streak: 'L4',
		},
		{
			name: 'NYK',
			wins: '23',
			losses: '26',
			winprc: '.469',
			behind: '8.5',
			home: '12-14',
			away: '11-12',
			last10: '4-6',
			streak: 'L2',
		},
		{
			name: 'ATL',
			wins: '22',
			losses: '25',
			winprc: '.468',
			behind: '8.5',
			home: '12-11',
			away: '10-14',
			last10: '5-5',
			streak: 'W5',
		},
	];
	constructor() {
		super();
	}
}
