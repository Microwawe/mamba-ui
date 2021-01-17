import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {CoreModule} from '@core/core.module';
import {SharedModule} from '@shared/shared.module';
import {FooterComponent} from '@shared/layout/footer/footer.component';
import {HeaderComponent} from '@shared/layout/header/header.component';
import {NotFoundComponent} from '@shared/components/not-found/not-found.component';
import {BreadcrumbComponent} from '@shared/layout/breadcrumb/breadcrumb.component';
import {HomeComponent} from '@shared/components/home/home.component';
import {SettingsComponent} from '@shared/layout/settings/settings.component';
import {CustomPreloadingStrategy} from '@core/custom.preload.strategy';
import {MenuComponent} from '@shared/layout/menu/menu.component';
import {MainComponent} from '@shared/layout/main/main.component';

@NgModule({
	declarations: [
		AppComponent,
		BreadcrumbComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		MainComponent,
		MenuComponent,
		NotFoundComponent,
		SettingsComponent,
	],
	imports: [
		CoreModule,
		AppRoutingModule,
		BrowserModule,
		SharedModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	providers: [CustomPreloadingStrategy],
	bootstrap: [AppComponent],
})
export class AppModule {}
