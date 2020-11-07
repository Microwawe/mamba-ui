import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CoreModule} from '@core/core.module';
import {SharedModule} from '@shared/shared.module';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {NotFoundComponent} from './layout/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		NotFoundComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CoreModule,
		SharedModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
