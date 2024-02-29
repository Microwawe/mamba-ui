import {environment} from '@env';
import {
	Component,
	OnDestroy,
	AfterViewInit,
	OnInit,
	Renderer2,
	ViewChild,
	ElementRef,
	Inject,
	Signal,
	afterNextRender,
} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';

import {BaseComponent} from '@shared/components/base/base.component';
import {MenuService} from '@shared/services/menu.service';
import {FullscreenModalService} from '@shared/services/fullscreen.modal.service';
import {Observable, Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('loadingScreen') loadingScreen!: ElementRef;
	modalContent!: Signal<string>;
	isDarkTheme!: Observable<boolean>;
	eventSub!: Subscription;
	devMode = false;
	loaded = false;
	canonicalLink!: HTMLLinkElement;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private titleService: Title,
		private menuService: MenuService,
		private modalService: FullscreenModalService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private renderer: Renderer2
	) {
		super();
		afterNextRender(() => {
			setTimeout(() => {
				this.renderer.setStyle(this.loadingScreen.nativeElement, 'display', 'none');
			}, 500);
			this.createCanonicalLink();
		});
	}

	ngOnInit(): void {
		this.isDarkTheme = this.themeService.getDarkTheme();
		this.modalContent = this.modalService.getModalSignal();
		this.devMode = !environment.production;

		const defaultTitle = 'Mamba UI';
		const defaultTitleDescription = 'Free Tailwind CSS components and templates';
		this.eventSub = this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				tap(() => this.updateCanonicalUrl()),
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

	ngAfterViewInit(): void {}

	closeMenu(): void {
		this.menuService.close();
	}

	createCanonicalLink() {
		this.canonicalLink = this.document.createElement('link');
		this.canonicalLink.setAttribute('rel', 'canonical');
		this.canonicalLink.setAttribute('href', 'https://mambaui.com');
		this.document.head.append(this.canonicalLink);
	}

	updateCanonicalUrl() {
		if (this.canonicalLink) {
			const url = this.document.URL.replace(/www./, '');
			this.canonicalLink.setAttribute('href', url);
		}
	}

	ngOnDestroy(): void {
		this.eventSub.unsubscribe();
	}
}
