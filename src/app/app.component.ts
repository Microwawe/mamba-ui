import {Component} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	isDarkTheme!: Observable<boolean>;

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}
}
