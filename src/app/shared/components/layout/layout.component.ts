import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';
import {Observable} from 'rxjs';

@Component({
	selector: 'custom-layout',
	templateUrl: './layout.component.html',
})
export class LayoutComponent extends BaseComponent {
	isDarkTheme!: Observable<boolean>;

	ngOnInit(): void {
		this.isDarkTheme = this.themeService.getDarkTheme();
	}
}
