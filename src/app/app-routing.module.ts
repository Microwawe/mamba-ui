import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './layout/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () =>
			import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'footer',
		loadChildren: () =>
			import('./features/footer/footer.module').then(m => m.FooterModule),
	},
	{
		path: 'hero',
		loadChildren: () =>
			import('./features/hero/hero.module').then(m => m.HeroModule),
	},
	{
		path: 'blog',
		loadChildren: () =>
			import('./features/blog/blog.module').then(m => m.BlogModule),
	},
	{
		path: 'call-to-action',
		loadChildren: () =>
			import('./features/call-to-action/call-to-action.module').then(
				m => m.CallToActionModule
			),
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
