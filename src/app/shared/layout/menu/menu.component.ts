import {Component, OnInit} from '@angular/core';
import {MenuService} from '@core/services/menu.service';

import {BaseComponent} from '@shared/components/base/base.component';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent implements OnInit {
	isOpen!: Observable<boolean>;
	categories = [
		{link: '', name: 'Home'},
		{link: 'components', name: 'Components'},
		{link: 'sections', name: 'Sections'},
		{link: 'templates', name: 'Templates'},
		{link: 'contact', name: 'Contact us'},
	];
	docsCategories = [
		{name: 'Get started', link: 'docs'},
		{name: 'General', link: 'docs/general'},
		{name: 'Roadmap', link: 'docs/roadmap'},
		{name: 'Credits', link: 'docs/credits'},
		{name: 'Privacy', link: 'docs/privacy'},
	];

	constructor(private menuService: MenuService) {
		super();
	}

	ngOnInit() {
		this.isOpen = this.menuService.isOpen();
	}

	closeMenu() {
		this.menuService.close();
	}

	toggleMenu() {
		this.menuService.toggle();
	}
}
