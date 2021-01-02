import {environment} from '@env';
import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ThemeService} from '@core/services/theme.service';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent {
	isDarkTheme!: Observable<boolean>;
	devMode = false;

	constructor(
		private titleService: Title,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		super();
	}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
		this.devMode = !environment.production;

		const [defaultTitle, defaultTitleDescription] = this.titleService.getTitle().split('|');
		this.router.events
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
}
