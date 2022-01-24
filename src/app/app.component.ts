import {environment} from '@env';
import {
	Component,
	OnDestroy,
	AfterViewInit,
	OnInit,
	Renderer2,
	ViewChild,
	ElementRef,
} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';

import {BaseComponent} from '@shared/components/base/base.component';
import {MenuService} from '@core/services/menu.service';
import {FullscreenModalService} from '@shared/services/fullscreen.modal.service';
import {Observable, Subscription} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('loadingScreen') loadingScreen!: ElementRef;
	modalContent!: Observable<string>;
	isDarkTheme!: Observable<boolean>;
	isOpen!: Observable<boolean>;
	eventSub!: Subscription;
	devMode = false;
	loaded = false;

	constructor(
		private titleService: Title,
		private menuService: MenuService,
		private modalService: FullscreenModalService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private renderer: Renderer2
	) {
		super();
	}

	ngOnInit(): void {
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

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.renderer.setStyle(this.loadingScreen.nativeElement, 'display', 'none');
		}, 500);
	}

	closeMenu(): void {
		this.menuService.close();
	}

	ngOnDestroy(): void {
		this.eventSub.unsubscribe();
	}
}
