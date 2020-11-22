import {Component} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	isDarkTheme!: Observable<boolean>;
	categories = [
		'blog',
		'call-to-action',
		'contact',
		'faq',
		'footer',
		'form',
		'hero',
		'login',
		'pricing',
		'stats',
		'steps',
		'team',
		'testimonial',
		'timeline',
	];

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}
}
