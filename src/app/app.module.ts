import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '@env';
import {CoreModule} from '@core/core.module';
import {CustomPreloadingStrategy} from '@core/custom.preload.strategy';
import {SharedModule} from '@shared/shared.module';
import {FooterComponent} from '@shared/components/footer/footer.component';
import {HeaderComponent} from '@shared/components/header/header.component';
import {NotFoundComponent} from '@shared/components/not-found/not-found.component';
import {BreadcrumbComponent} from '@shared/components/breadcrumb/breadcrumb.component';
import {HomeComponent} from '@shared/components/home/home.component';
import {SettingsComponent} from '@shared/components/settings/settings.component';
import {MenuComponent} from '@shared/components/menu/menu.component';
import {LayoutComponent} from '@shared/components/layout/layout.component';

@NgModule({
	declarations: [
		AppComponent,
		BreadcrumbComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		LayoutComponent,
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
	providers: [CustomPreloadingStrategy, provideClientHydration()],
	bootstrap: [AppComponent],
})
export class AppModule {}
