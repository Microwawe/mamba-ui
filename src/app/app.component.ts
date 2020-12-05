import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ThemeService} from '@core/services/theme.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	isDarkTheme!: Observable<boolean>;

	constructor(
		private themeService: ThemeService,
		private titleService: Title,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();

		const defaultTitle = this.titleService.getTitle();
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
			.subscribe((title: string) => {
				const newTitle = [defaultTitle, title].filter(Boolean).join(' - ');
				this.titleService.setTitle(newTitle);
			});
	}
}
