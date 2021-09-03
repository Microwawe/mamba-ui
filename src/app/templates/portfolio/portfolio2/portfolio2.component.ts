import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-portfolio2',
	templateUrl: './portfolio2.component.html',
})
export class Portfolio2Component extends BaseComponent {
	year = new Date().getFullYear();
	stats = [
		{amount: '50+', label: 'Clients'},
		{amount: '89K', label: 'Followers on social media'},
		{amount: '3', label: 'Published books'},
		{amount: '8', label: 'TED talks'},
		{amount: '22', label: 'Years of experience'},
		{amount: '10+', label: 'Workshops'},
	];
	posts = [
		{
			title: 'Hendrerit vulputate eu quo.',
			content:
				'Qui ei agam assum vivendum, ad nostro mediocrem sit, erant sanctus maiestatis vel no. Reque periculis usu at, id mel dicam impetus aliquip. At discere feugiat qui, meliore lucilius persecuti ut pri, vivendo corpora ne sit.',
		},
		{
			title: ' Vis te oporteat deterruisset.',
			content:
				' Vero facete sea ne. Ludus saperet scriptorem no usu. Legere intellegam delicatissimi te sit. Vis te oporteat deterruisset.',
		},
		{
			title: 'Mentitum apeirian vim ne, usu illud ridens cu.',
			content:
				'Duo ei paulo decore periculis, sed ex hinc inermis vivendo, meis feugait no mea. Pri magna commodo urbanitas cu, id eos lorem inimicus prodesset. Cu qui vidisse epicurei accusamus.',
		},
	];
	timeline20 = [
		{
			title: 'Vel an apeirian assentior',
			content:
				'Eam eu stet porro fabellas, accumsan prodesset cum ad, has cu odio mundi neglegentur. Cu solum vocent fabellas vix, an dicant constituto duo.',
		},
		{
			title: 'Mea ea diam vidisse',
			content:
				' Vero facete sea ne. Ludus saperet scriptorem no usu. Legere intellegam delicatissimi te sit. Vis te oporteat deterruisset.',
		},
	];
	timeline21 = [
		{
			title: 'Vix at latine consulatu.',
			content:
				'Cu eum nostrum repudiare, sed dicat doming integre in. Id scripta percipit lucilius pro, te eam libris verterem.',
		},
		{
			title: 'Eam eu stet porro fabellas',
			content: 'Cut et laoreet vocibus adipisci. Verear utroque perpetua per eu.',
		},
	];

	constructor() {
		super();
	}
}
