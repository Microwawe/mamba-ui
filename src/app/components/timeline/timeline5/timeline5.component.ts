import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-timeline5',
	templateUrl: './timeline5.component.html',
})
export class Timeline5Component extends BaseComponent {
	items = [
		{
			'title': 'Donec porta enim vel ',
			'date': 'Dec 2020',
			'description':
				'Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		},
		{
			'title': 'Aliquam sit amet nunc ut',
			'date': 'Jul 2019',
			'description':
				'Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.',
		},
		{
			'title': 'Pellentesque habitant morbi',
			'date': 'Jan 2016',
			'description':
				'Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.',
		},
	];

	constructor() {
		super();
	}
}
