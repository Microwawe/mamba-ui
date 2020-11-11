import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BaseComponent} from './components/base/base.component';
import {ColorSelectorComponent} from './components/color-selector/color-selector.component';
import {ThemeSelectorComponent} from './components/theme-selector/theme-selector.component';

const components = [
	BaseComponent,
	ThemeSelectorComponent,
	ColorSelectorComponent,
];
@NgModule({
	imports: [CommonModule],
	declarations: [...components],
	exports: [CommonModule, FormsModule, ...components],
	providers: [],
})
export class SharedModule {}
