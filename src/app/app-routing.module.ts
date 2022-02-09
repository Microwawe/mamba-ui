import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CustomPreloadingStrategy} from '@core/custom.preload.strategy';
import {HomeComponent} from '@shared/components/home/home.component';
import {NotFoundComponent} from '@shared/components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'components',
		loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
		data: {title: 'Components', breadcrumb: 'Components'},
	},
	{
		path: 'templates',
		loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule),
		data: {title: 'Templates', breadcrumb: 'Templates'},
	},
	{
		path: 'docs',
		loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
		data: {title: 'Documentation', breadcrumb: 'Documentation'},
	},
	{
		path: 'contact',
		loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
		data: {title: 'Contact us', breadcrumb: 'Contact us'},
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
