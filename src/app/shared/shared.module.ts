import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {FilterPipe} from '@shared/pipes/filter.pipe';
import {BaseComponent} from '@shared/components/base/base.component';
import {FullscreenModalComponent} from '@shared/components/fullscreen-modal/fullscreen-modal.component';
import {RequirementsComponent} from '@shared/components/requirements/requirements.component';
import {ShowCodeComponent} from '@shared/components/show-code/show-code.component';
import {ShowcaseComponent} from '@shared/components/showcase/showcase.component';

const components = [
	BaseComponent,
	ShowcaseComponent,
	ShowCodeComponent,
	FullscreenModalComponent,
	RequirementsComponent,
];
const pipes = [FilterPipe];

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [...components, ...pipes],
	exports: [CommonModule, HttpClientModule, FormsModule, ...components, ...pipes],
	providers: [],
})
export class SharedModule {}
