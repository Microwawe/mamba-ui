import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-news1',
	templateUrl: './news1.component.html',
})
export class News1Component extends BaseComponent {
	exclusives = [
		{
			title: 'Donec sed elit quis odio mollis dignissim eget et nulla.',
			time: '47 minutes',
		},
		{
			title: 'Ut fermentum nunc quis ipsum laoreet condimentum.',
			time: '2 hours',
		},
		{
			title: 'Nunc nec ipsum lobortis, pulvinar neque sed.',
			time: '4 hours',
		},
	];
	sidenews = [
		{
			title: 'Aenean ac tristique lorem, ut mollis dui.',
			url: 'https://source.unsplash.com/random/244x324',
			time: '5 minutes',
			category: 'Politics',
		},
		{
			title: 'Nulla consectetur efficitur.',
			url: 'https://source.unsplash.com/random/245x325',
			time: '14 minutes',
			category: 'Sports',
		},
		{
			title: 'Vitae semper augue purus tincidunt libero.',
			url: 'https://source.unsplash.com/random/246x326',
			time: '22 minutes',
			category: 'World',
		},
		{
			title: 'Suspendisse potenti.',
			url: 'https://source.unsplash.com/random/247x327',
			time: '37 minutes',
			category: 'Business',
		},
	];
	constructor() {
		super();
	}
}
