import {Component, OnInit, Signal, signal} from '@angular/core';
import {MenuService} from '@core/services/menu.service';

import {BaseComponent} from '@shared/components/base/base.component';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent implements OnInit {
	menuOpen!: Signal<boolean>;
	docsOpen = false;
	categories = [
		{link: '', name: 'Home'},
		{link: 'components', name: 'Components'},
		{link: 'templates', name: 'Templates'},
		{link: 'contact', name: 'Contact us'},
	];
	docsCategories = [
		{name: 'Get started', link: 'docs'},
		{name: 'General', link: 'docs/general'},
		{name: 'Roadmap', link: 'docs/roadmap'},
		{name: 'Credits', link: 'docs/credits'},
		// {name: 'Privacy', link: 'docs/privacy'},
	];

	constructor(private menuService: MenuService) {
		super();
	}

	ngOnInit() {
		this.menuOpen = this.menuService.openSignal();
	}

	closeMenu() {
		this.docsOpen = false;
		this.menuService.close();
	}

	toggleDocs(event: Event) {
		this.docsOpen = !this.docsOpen;
		event.stopPropagation();
	}
}
