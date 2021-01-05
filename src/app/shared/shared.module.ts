import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BaseComponent} from './components/base/base.component';
import {ShowCodeComponent} from './components/show-code/show-code.component';
import {ShowcaseComponent} from './components/showcase/showcase.component';

const components = [BaseComponent, ShowcaseComponent, ShowCodeComponent];
@NgModule({
	imports: [CommonModule],
	declarations: [...components],
	exports: [CommonModule, FormsModule, ...components],
	providers: [],
})
export class SharedModule {}
