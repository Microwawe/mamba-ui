import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-faq5',
	templateUrl: './faq5.component.html',
})
export class Faq5Component extends BaseComponent {
	faqs = [
		{
			question: 'Ex orci laoreet egestas sapien magna egestas scelerisque?',
			answer:
				'Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. ',
		},
		{
			question: 'Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?',
			answer:
				'Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. ',
		},
		{
			question: 'Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?',
			answer:
				'Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. ',
		},
	];
	constructor() {
		super();
	}
}
