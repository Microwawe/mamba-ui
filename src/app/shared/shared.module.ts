import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {FilterPipe} from '@shared/pipes/filter.pipe';
import {SafeHtmlPipe} from '@shared/pipes/safe-html.pipe';
import {BaseComponent} from '@shared/components/base/base.component';
import {FullscreenModalComponent} from '@shared/components/fullscreen-modal/fullscreen-modal.component';
import {RequirementsComponent} from '@shared/components/requirements/requirements.component';
import {ShowCodeComponent} from '@shared/components/show-code/show-code.component';
import {ShowcaseComponent} from '@shared/components/showcase/showcase.component';
import {SearchComponent} from '@shared/components/search/search.component';
import {EmptyChildRouteComponent} from '@shared/components/empty-child-route/empty-child-route.component';
import {AdsComponent} from './components/ads/ads.component';
import {DummylinkDirective} from './directives/dummylink.directive';

const components = [
	AdsComponent,
	BaseComponent,
	EmptyChildRouteComponent,
	FullscreenModalComponent,
	RequirementsComponent,
	SearchComponent,
	ShowcaseComponent,
	ShowCodeComponent,
];
const pipes = [FilterPipe, SafeHtmlPipe];

const directives = [DummylinkDirective];

@NgModule({
	imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
	declarations: [...components, ...pipes, ...directives],
	exports: [CommonModule, HttpClientModule, FormsModule, ...components, ...pipes, ...directives],
	providers: [],
})
export class SharedModule {}
