import {environment} from '@env';
import {Component, OnDestroy} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

import {BaseComponent} from '@shared/components/base/base.component';
import {MenuService} from '@core/services/menu.service';
import {FullscreenModalService} from '@core/services/fullscreen.modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent implements OnDestroy {
	modalContent!: Observable<string>;
	isDarkTheme!: Observable<boolean>;
	isOpen!: Observable<boolean>;
	eventSub!: Subscription;
	devMode = false;

	constructor(
		private titleService: Title,
		private menuService: MenuService,
		private modalService: FullscreenModalService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		super();
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
		this.modalContent = this.modalService.getModalOpen();
		this.isOpen = this.menuService.isOpen();
		this.devMode = !environment.production;

		const [defaultTitle, defaultTitleDescription] = this.titleService.getTitle().split('|');
		this.eventSub = this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				map(() => {
					let child = this.activatedRoute.firstChild;
					while (child?.firstChild) {
						child = child.firstChild;
					}
					if (child?.snapshot.data['title']) {
						return child.snapshot.data['title'];
					}
					return '';
				})
			)
			.subscribe((routeTitle: string) => {
				const newTitle = [defaultTitle, routeTitle, defaultTitleDescription]
					.filter(Boolean)
					.join(' | ');
				this.titleService.setTitle(newTitle);
			});
	}

	closeMenu() {
		this.menuService.close();
	}

	ngOnDestroy() {
		this.eventSub.unsubscribe();
	}
}
