import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BaseComponent} from './components/base/base.component';
import {ColorSelectorComponent} from './components/color-selector/color-selector.component';
import {ShowCodeComponent} from './components/show-code/show-code.component';
import {ThemeSelectorComponent} from './components/theme-selector/theme-selector.component';

const components = [
	BaseComponent,
	ColorSelectorComponent,
	ShowCodeComponent,
	ThemeSelectorComponent,
];
@NgModule({
	imports: [CommonModule],
	declarations: [...components],
	exports: [CommonModule, FormsModule, ...components],
	providers: [],
})
export class SharedModule {}
