import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './layout/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'components',
		loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
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
