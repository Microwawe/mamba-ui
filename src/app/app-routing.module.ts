import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomeComponent} from '@core/layout/home/home.component';
import {NotFoundComponent} from '@core/layout/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'components',
		loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
	},
	{
		path: 'demos',
		loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule),
	},
	{
		path: 'sections',
		loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule),
	},
	{path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: '**', component: NotFoundComponent},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
