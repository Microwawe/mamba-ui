import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-faq6',
	templateUrl: './faq6.component.html',
})
export class Faq6Component extends BaseComponent {
	data = [
		{
			title: 'Account',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current h-5 w-5"><path d="M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z"/></svg>`,
			faqs: [
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
					question:
						'Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?',
					answer:
						'Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. ',
				},
			],
		},
		{
			title: 'Billing',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current h-5 w-5"><path d="M432,64H16V384H432ZM400,352H48V96H400Z" /><polygon points="464 144 464 416 96 416 96 448 496 448 496 144 464 144" /><path d="M224,302.46c39.7,0,72-35.137,72-78.326s-32.3-78.326-72-78.326-72,35.136-72,78.326S184.3,302.46,224,302.46Zm0-124.652c22.056,0,40,20.782,40,46.326s-17.944,46.326-40,46.326-40-20.782-40-46.326S201.944,177.808,224,177.808Z" /><rect width="32" height="176" x="80" y="136" /><rect width="32" height="176" x="336" y="136" /></svg>`,
			faqs: [
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
					question:
						'Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?',
					answer:
						'Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. ',
				},
			],
		},
		{
			title: 'Support',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current h-5 w-5"><path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z" /><path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z" /></svg>`,
			faqs: [
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
			],
		},
		{
			title: 'Integrations',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current h-5 w-5"><polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"/><polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"/><polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"/></svg>`,
			faqs: [
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
					question:
						'Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?',
					answer:
						'Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. ',
				},
			],
		},
		{
			title: 'Media',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current h-5 w-5"><path d="M472,88.5H302.627l72.5-72.5H329.873l-72.5,72.5h-2.246L182.627,16H137.373l72.5,72.5H40a24.028,24.028,0,0,0-24,24v296a24.028,24.028,0,0,0,24,24H152V496H376V432.5h96a24.028,24.028,0,0,0,24-24v-296A24.028,24.028,0,0,0,472,88.5ZM344,464H184V432.5H344Zm120-63.5H48v-280H464Z"/></svg>`,
			faqs: [
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
					question:
						'Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?',
					answer:
						'Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. ',
				},
			],
		},
		{
			title: 'Legal',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current h-5 w-5"><path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"/><path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"/><path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"/></svg>`,
			faqs: [
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
			],
		},
	];

	constructor() {
		super();
	}
}
