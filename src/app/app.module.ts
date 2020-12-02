import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {CoreModule} from '@core/core.module';
import {SharedModule} from '@shared/shared.module';
import {FooterComponent} from '@core/layout/footer/footer.component';
import {HeaderComponent} from '@core/layout/header/header.component';
import {NotFoundComponent} from '@core/layout/not-found/not-found.component';

@NgModule({
	declarations: [AppComponent, FooterComponent, HeaderComponent, NotFoundComponent],
	imports: [
		CoreModule,
		AppRoutingModule,
		BrowserModule,
		SharedModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
