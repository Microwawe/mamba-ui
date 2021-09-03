import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-news3',
	templateUrl: './news3.component.html',
})
export class News3Component extends BaseComponent {
	news = [
		{
			title: ' Autem sunt tempora mollitia magnam non voluptates',
			category: 'Politics',
			month: 'Aug',
			date: '04',
			url: 'https://source.unsplash.com/random/240x320',
		},
		{
			title: 'Inventore reiciendis aliquam excepturi',
			category: 'Health',
			month: 'Aug',
			date: '01',
			url: 'https://source.unsplash.com/random/241x320',
		},
		{
			title: 'Officiis mollitia dignissimos commodi optio vero animi',
			category: 'Science',
			month: 'Jul',
			date: '28',
			url: 'https://source.unsplash.com/random/242x320',
		},
		{
			title: 'Doloribus sit illo necessitatibus architecto exercitationem enim',
			category: 'Sports',
			month: 'Jul',
			date: '19',
			url: 'https://source.unsplash.com/random/243x320',
		},
	];
	constructor() {
		super();
	}
}
