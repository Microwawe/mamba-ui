import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './layout/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'blog',
		loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule),
	},
	{
		path: 'call-to-action',
		loadChildren: () =>
			import('./features/call-to-action/call-to-action.module').then(
				m => m.CallToActionModule
			),
	},
	{
		path: 'contact',
		loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule),
	},
	{
		path: 'faq',
		loadChildren: () => import('./features/faq/faq.module').then(m => m.FaqModule),
	},
	{
		path: 'feature',
		loadChildren: () => import('./features/feature/feature.module').then(m => m.FeatureModule),
	},
	{
		path: 'footer',
		loadChildren: () => import('./features/footer/footer.module').then(m => m.FooterModule),
	},
	{
		path: 'form',
		loadChildren: () => import('./features/form/form.module').then(m => m.FormModule),
	},
	{
		path: 'hero',
		loadChildren: () => import('./features/hero/hero.module').then(m => m.HeroModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'login',
		loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
	},
	{
		path: 'pricing',
		loadChildren: () => import('./features/pricing/pricing.module').then(m => m.PricingModule),
	},
	{
		path: 'stats',
		loadChildren: () => import('./features/stats/stats.module').then(m => m.StatsModule),
	},
	{
		path: 'steps',
		loadChildren: () => import('./features/steps/steps.module').then(m => m.StepsModule),
	},
	{
		path: 'team',
		loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule),
	},
	{
		path: 'testimonial',
		loadChildren: () =>
			import('./features/testimonial/testimonial.module').then(m => m.TestimonialModule),
	},
	{
		path: 'timeline',
		loadChildren: () =>
			import('./features/timeline/timeline.module').then(m => m.TimelineModule),
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
