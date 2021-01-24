import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BaseComponent} from './components/base/base.component';
import {FullscreenModalComponent} from './components/fullscreen-modal/fullscreen-modal.component';
import {ShowCodeComponent} from './components/show-code/show-code.component';
import {ShowcaseComponent} from './components/showcase/showcase.component';

const components = [BaseComponent, ShowcaseComponent, ShowCodeComponent, FullscreenModalComponent];
@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [...components],
	exports: [CommonModule, HttpClientModule, FormsModule, ...components],
	providers: [],
})
export class SharedModule {}
