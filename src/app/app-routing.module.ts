import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {CustomPreloadingStrategy} from '@core/custom.preload.strategy';
import {CreditsComponent} from '@core/layout/credits/credits.component';
import {DocsComponent} from '@core/layout/docs/docs.component';
import {HomeComponent} from '@core/layout/home/home.component';
import {NotFoundComponent} from '@core/layout/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'components',
		loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
		data: {title: 'Components', breadcrumb: 'Components', preload: true},
	},
	{
		path: 'templates',
		loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule),
		data: {title: 'Templates', breadcrumb: 'Templates', preload: true},
	},
	{
		path: 'sections',
		loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule),
		data: {title: 'Sections', breadcrumb: 'Sections', preload: true},
	},
	{
		path: 'docs',
		component: DocsComponent,
		data: {title: 'Documentation', breadcrumb: 'Documentation'},
	},
	{
		path: 'credits',
		component: CreditsComponent,
		data: {title: 'Credits', breadcrumb: 'Credits'},
	},
	{path: '**', component: NotFoundComponent},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: CustomPreloadingStrategy,
			scrollPositionRestoration: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
