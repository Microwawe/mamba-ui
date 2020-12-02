import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {SectionsComponent} from './sections.component';

const routes: Routes = [
	{
		path: '',
		component: SectionsComponent,
	},
	{
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	},
	{
		path: 'call-to-action',
		loadChildren: () =>
			import('./call-to-action/call-to-action.module').then(m => m.CallToActionModule),
	},
	{
		path: 'contact',
		loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
	},
	{
		path: 'faq',
		loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
	},
	{
		path: 'feature',
		loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
	},
	{
		path: 'footer',
		loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule),
	},
	{
		path: 'form',
		loadChildren: () => import('./form/form.module').then(m => m.FormModule),
	},
	{
		path: 'header',
		loadChildren: () => import('./header/header.module').then(m => m.HeaderModule),
	},
	{
		path: 'hero',
		loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
	},
	{
		path: 'pricing',
		loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule),
	},
	{
		path: 'stats',
		loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule),
	},
	{
		path: 'steps',
		loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule),
	},
	{
		path: 'team',
		loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
	},
	{
		path: 'testimonial',
		loadChildren: () =>
			import('./testimonial/testimonial.module').then(m => m.TestimonialModule),
	},
	{
		path: 'timeline',
		loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	exports: [RouterModule],
	declarations: [SectionsComponent],
})
export class SectionsModule {}
