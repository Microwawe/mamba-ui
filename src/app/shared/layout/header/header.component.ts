import {Component, OnInit} from '@angular/core';
import {MenuService} from '@core/services/menu.service';
import {BaseComponent} from '@shared/components/base/base.component';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
	menuOpen!: Observable<boolean>;

	constructor(private menuService: MenuService) {
		super();
	}

	ngOnInit() {
		this.menuOpen = this.menuService.isOpen();
	}

	closeMenu() {
		this.menuService.close();
	}

	toggleMenu(event: Event) {
		event.stopPropagation();
		this.menuService.toggle();
	}
}
