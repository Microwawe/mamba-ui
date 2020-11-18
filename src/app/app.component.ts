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
	categories = ['blog', 'hero', 'footer', 'call-to-action', 'pricing'];

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}
}
