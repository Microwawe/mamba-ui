import {Directive, Input} from '@angular/core';

@Directive({
	selector: '[href]',
	host: {
		'(click)': 'handleLinkClick($event)',
	},
})
export class DummylinkDirective {
	@Input() href;

	/**
	 * Prevents the default action of the link if the href is empty or '#'
	 * So basically this prevents the <a> in the components from redirecting to the front page
	 */
	handleLinkClick(event) {
		if (this.href === '' || this.href === '#') {
			event.preventDefault();
			event.stopPropagation();
		}
	}
}
