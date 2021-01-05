import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-home',
	templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {
	stats2 = [
		{amount: '50+', label: 'Components'},
		{amount: '20+', label: 'Sections'},
		{amount: '3', label: 'Templates'},
		{amount: '100%', label: 'Free'},
	];
	faq = [
		{
			q: 'What is TailwindCSS?',
			a:
				'TailwindCSS is a utility-first CSS framework created by Adam Wathan and Steve Schroger. ',
		},
		{
			q: 'What does this cost?',
			a:
				"Nothing! All of this is MIT licensed so you don't have to pay anything. If you'd still like to support me you can buy me a coffee. ",
		},
		{
			q: "Some of the colors don't seem to work",
			a:
				"Tailwind doesn't have all of the available colors in the default configuration. If you chose one of those then you need to enable it in your tailwind.config.js -file. I have examples in the documentation and you can copy-paste the config from there to get it to work.",
		},
		{
			q: "I didn't find a component that I need",
			a:
				"I'm creating more and more whenever I find the time for this. If you have a specific component/section/template that you need, just message me via Github or Twitter and I'll see what I can do.",
		},
		{
			q: 'How do I set this up?',
			a:
				'I have a quick quide in the documentation and the official TailwindCSS docs also have guides for getting up and running with several different frameworks.',
		},
	];

	constructor() {
		super();
	}

	ngOnInit() {}
}
